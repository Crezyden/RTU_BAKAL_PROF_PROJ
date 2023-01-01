import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, ObjectId, Types } from "mongoose";
import { FileService, FileType} from "../file/file.service";
import { User, UserDocument } from "../user/schemas/user.schema";
// import { FileService, FileType } from "../file/file.service";
import { CreateReceiptDto } from "./dto/create_receipt.dto";
import { Receipt, ReceptDocument } from "./schemas/receipt.schema";
// import { Tag, TagDocument } from "./schemas/tag.schema";
import { UserService } from './../user/user.service';
import { Tags, TagsDocument } from "./schemas/tags.schema";
import { TagsDto } from "./dto/tags.dto";
// import { Tags, TagsDocument } from "../tags/tags.schema";

@Injectable()
export class ReceiptService{
        
  constructor(@InjectModel(Receipt.name) private receiptModel: Model<ReceptDocument>,
              @InjectModel(Tags.name) private tagModel:   Model<TagsDocument>, 
              @InjectModel(User.name) private userModel:   Model<UserDocument>, 
              // @InjectModel(User.name) private UserModel:   Model<UserDocument>, 
              private fileServise: FileService, 
              private UserServise: UserService, 
  ) {}
    
    async create(email:string, dto: CreateReceiptDto, recfile:any):Promise <Receipt>{
      const user = await this.UserServise.findByEmail(email)  
      const Uplfile = await this.fileServise.createFile(recfile)
      console.log(Uplfile)
      const recepts = await this.receiptModel.create({...dto, recfile:Uplfile})
      await recepts.$set('user', user); 
      user.receipt.push(recepts)
      recepts.save();
      user.save();
      
      return recepts
    }

    async getAll( user:string): Promise<Receipt[]>{
      const receipt= await this.receiptModel.find({user})
      return receipt;
    }


    async getOne(id: ObjectId): Promise<Receipt>{
      const receips= await this.receiptModel.findById(id);
      return receips; 
    }

    async delete(id: ObjectId): Promise<ObjectId>{
      const receips = await this.receiptModel.findByIdAndDelete(id)        
      return receips._id;
    }
    async searh(query:string): Promise<Receipt[]>{
      const receip = await this.receiptModel.find({
         name: {$regax: new RegExp(query, 'i')} 
      })
      return receip    }
    
    async createTag( dto:TagsDto){
        const receip = await this.receiptModel.findById(dto)
        console.log(receip,"in")
        
        // const receip = await this.receiptModel.findById(id)
        const tags = await this.tagModel.create({...dto})
        // await tags.$set('receiptid',[receip])
        // receip.tags.push(tags.id)
        // receip.save();
        tags.save();
        console.log(tags)
        return tags
      }
    async addreceiptusers(dto: CreateReceiptDto, recfile){
      const user =  await this.UserServise.findByEmail(dto.UsersEmail)
      console.log(user.email)
      if(user.email == dto.UsersEmail){
          const sendreceipt = await this.create(dto.UsersEmail, dto ,recfile)
          return 'Send OK'  
          // } else{
            // }
      }else{
        throw new HttpException('User not found', HttpStatus.INTERNAL_SERVER_ERROR)
      }
      }
}