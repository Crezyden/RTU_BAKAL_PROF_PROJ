import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, ObjectId, Types } from "mongoose";
import { FileService, FileType } from "../file/file.service";
import { User, UserDocument } from "../user/schemas/user.schema";
import { CreateReceiptDto } from "./dto/create_receipt.dto";
import { Receipt, ReceptDocument } from "./schemas/receipt.schema";
import { UserService } from './../user/user.service';
import { TagsDto } from "./dto/tags.dto";
import { Tags, TagsDocument } from "../tags/schemas/tags.schema";
@Injectable()
export class ReceiptService {

  constructor(@InjectModel(Receipt.name) private receiptModel: Model<ReceptDocument>,
    @InjectModel(Tags.name) private tagModel: Model<TagsDocument>,
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    // @InjectModel(User.name) private UserModel:   Model<UserDocument>, 
    private fileServise: FileService,
    private UserServise: UserService,
  ) { }

  async create(email: string, dto: CreateReceiptDto, recfile: any): Promise<Receipt> {
    console.log(recfile)
    const user = await this.UserServise.findByEmail(email)
    const receipts = await this.receiptModel.create({ ...dto, ...recfile })
    receipts.$set('user', [user.id]);
    receipts.save();

    return receipts
  }

  async getAll(id: string): Promise<Receipt[]> {
    const receipt = await this.receiptModel.find({ user: id })
    return receipt;
  }


  async getOne(id: ObjectId): Promise<Receipt> {
    const receips = await this.receiptModel.findById(id);
    return receips;
  }

  async delete(id: ObjectId): Promise<ObjectId> {
    const receips = await this.receiptModel.findByIdAndDelete(id)
    return receips._id;
  }

  async search(query: string): Promise<Receipt[]> {
    const receip = await this.receiptModel.find({
      name: { $regax: new RegExp(query, 'i') }
    })
    return receip
  }

  async addreceiptusers(dto: CreateReceiptDto, recfile) {
    const user = await this.UserServise.findByEmail(dto.UsersEmail)
    console.log(user.email)
    if (user.email == dto.UsersEmail) {
      const sendreceipt = await this.create(dto.UsersEmail, dto, recfile)
      return 'Send OK'
    } else {
      throw new HttpException('User not found', HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  async addtags(id: string, idt: string): Promise<Receipt> {
    const tags = await this.tagModel.findById(idt)
    const receipt = await this.receiptModel.findById(id)
    receipt.tags.push(receipt.id)
    await receipt.save()

    return receipt
  }
}