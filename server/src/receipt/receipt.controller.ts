import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
  Req,
  Res,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { CreateReceiptDto } from './dto/create_receipt.dto';
import { ReceiptService } from './receipt.service';
import { FileFieldsInterceptor, FileInterceptor } from '@nestjs/platform-express';
import { ObjectId } from 'mongoose';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import * as jwtGuard from './../auth/guards/jwt.guard';
import { AuthService } from './../auth/auth.service';
import { TagsDto } from './dto/tags.dto';
import { Receipt } from './schemas/receipt.schema';
import { Roles } from '../auth/guards/roles-auth.decorator';

@ApiTags('Receipt')
@Controller('/receipt')
export default class ReceiptController {
  constructor(
    private receiptService: ReceiptService,
    private authService: AuthService,
  ) {}
  @Post('')
  @ApiOperation({summary:'Add receipt'})
  @ApiResponse({status: 200, type: Receipt })
  @UseGuards(jwtGuard.Auth)
  @UseInterceptors(FileInterceptor('recfile'))
  // [
      // {name:'recfile',maxCount: 1}
      // ]/
      
      create(@Req() req, @Body() dto: CreateReceiptDto, @UploadedFile() recfile ) {
        // const {recfile} = files
        return this.receiptService.create(req.user.email, dto, recfile);
      }
      
      @Post('users')
      @ApiOperation({summary:'Add receipt users'})
      @ApiResponse({status: 200, type: Receipt })
      @UseGuards(jwtGuard.Auth)
      @Roles('Shop')
      @UseInterceptors(FileInterceptor(
    // [
      // {name:'recfile',maxCount: 1}
      // ]
      'recfile'
      ))

  addreceiptusers(@Req() req, @Body() dto: CreateReceiptDto, @UploadedFile() recfile ) {
    // const {recfile} = files
    return this.receiptService.addreceiptusers(dto, recfile);
  }
  
  @ApiOperation({summary:'Get all users receipt'})
  @ApiResponse({status: 200, type: Receipt })
  @Get()
  @UseGuards(jwtGuard.Auth)
  async getAll(
    @Query('count') count: number,
    @Query('offset') offset: number,
    @Req() req,
    // @Res() res,
    ) {
      // const token = req.token;
      const receipt = await this.receiptService.getAll(req.user);
      return receipt;
    }
    @ApiOperation({summary:'Search receipt'})
    @ApiResponse({status: 200, type: Receipt })
    @Get('/search')
    search(@Query('query') query: string) {
      return this.receiptService.searh(query);
    }
    @ApiOperation({summary:'Get receipt'})
    @ApiResponse({status: 200, type: Receipt })
    @Get(':id')
    @UseGuards(jwtGuard.Auth)
    getOne(@Param('id') id: ObjectId) {
      return this.receiptService.getOne(id);
    }
  @ApiOperation({summary:'Delete receipt'})
  @ApiResponse({status: 200, type: Receipt })
  @Delete(':id')
  @UseGuards(jwtGuard.Auth)
  delete(@Param('id') id: ObjectId) {
    return this.receiptService.delete(id);
  }
  // @Post('/tags')
  // // @UseGuards(jwtGuard.Auth)
  // createTags(@Req() req, @Body() dto: TagsDto) {
  //   console.log(dto.receptid)
  //   return this.receiptService.createTag(dto);
  // }
}
