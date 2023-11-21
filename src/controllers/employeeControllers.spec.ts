
//user registration unit test


import mssql, { rows } from 'mssql'
import bcrypt from 'bcrypt'
import { v4 } from 'uuid'
import { registerEmployee } from './employeeControllers'
import { Request, Response } from 'express'


describe("registers an employee", () => {

    it("successfully register employee", async() => {

        let req = {
            name:"Michael",
            email:"mikevenum9@gmail.com",
            phone_no:"0703142443",
            id_no:"4484884",
            KRA_PIN:"pkdjj34",
            NHIF_NO:"cnc44",
            NSSF_NO:"njknfv43",
            password:"Mike1234567"

        }

        let response = {}


        let res :Partial<Response> = {
            json:jest.fn().mockImplementation((result)=>{
                
            })

        };
        jest.mock("bcrypt",()=>({
            hash: jest.fn().mockResolvedValue("hashedpwd")
        }));

        const  mockedV4 = jest.requireMock("uuid").v4
        mockedV4.mockImplementation(()=> "something");
        console.log(mockedV4());

        //inputs
        const mockedInput = jest.fn().mockReturnThis();

        const mockedExecute = jest.fn().mockResolvedValue({rowsAffected:[1]});

        const mockedRequest = {
            input: mockedInput,
            execute: mockedExecute
        }

        const mockedPool = {
            request: jest.fn().mockReturnValue(mockedRequest)

        }

        jest.mock("mssql",()=>({
            connect: jest.fn().mockResolvedValue(mockedPool)
        }));
        
        
       c

        //assertions
        expect(response).toEqual({message:"Employee registered successfully"})
    })
})