"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
// server listens
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield server.listen({ port: 8000 });
        console.log("Server STarted Succesfully");
    }
    catch (err) {
        console.log(err);
    }
});
start();
const server = (0, fastify_1.default)({ logger: true });
// model Creation
// const userdetails = dbconnect.define<Model<Details>,Details>('detail',{  
//     sno:{
//         type:DataTypes.INTEGER,
//         autoIncrement:true,
//         primaryKey:true,
//     },
//     url:{
//         type:DataTypes.STRING,
//         allowNull:false,
//     },
//     name:{
//         type:DataTypes.STRING,
//         allowNull : false,
//     },
//     image:{
//         type:DataTypes.STRING,
//         allowNull:false,
//     }
// })
