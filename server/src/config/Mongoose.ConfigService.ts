import { Injectable } from "@nestjs/common";
import {MongooseModuleOptions, MongooseOptionsFactory } from '@nestjs/mongoose';
// import { MongooseOptions } from "mongoose";

@Injectable()

export class MongooseConfigService implements MongooseOptionsFactory{
	createMongooseOptions(): MongooseModuleOptions {
		return{
			uri: process.env.SERVER_URL,
			dbName: process.env.DATABESE_NAME
		
		}
	}
}