import {HttpException, HttpStatus, Injectable} from "@nestjs/common";
import * as path from 'path'
import * as fs from 'fs'
import * as uuid from 'uuid'

export enum FileType {
    RECEIPT = 'recfile'
}

@Injectable()
export class FileService{

    //  createFile(type:FileType, file){
    //  createFile(file){
    async createFile(file): Promise <string>{
        try {
            // const fileExtension = file.originalname.splits('.').pop()
            // const fileName = uuid.v4() + '.' + fileExtension
            const fileName = uuid.v4() + '.jpg' 
            const filePath = path.resolve(__dirname, '..', 'static')
            if(!fs.existsSync(filePath)) {
                fs.mkdirSync(filePath, {recursive: true})
            }
            fs.writeFileSync(path.join(filePath, fileName), file.buffer)
            // fs.writeFileSync(path.join(filePath, fileName), file.buffer)
            // return type + '/' + fileName
            return fileName
        } catch (e) {
            throw new HttpException('Not uploadd file', HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    removeFile(fileName: string) {

    }

}