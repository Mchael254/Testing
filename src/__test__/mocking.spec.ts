import {v4} from 'uuid';

jest.mock('uuid',()=>({
  v4:jest.fn()


}))


describe("it mocks a v4",()=>{

  it("brings back a unique id",()=>{

   const mockedV4 = jest.requireMock('uuid').v4

   mockedV4.mockImplementation(()=>'something')
   console.log(v4());
   
    
  })
})

