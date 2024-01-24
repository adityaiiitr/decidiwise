import { connectToDB } from '../../../utils/mongoDB';
import Email from "../../../models/email";
import { NextResponse, NextRequest } from 'next/server'

export const POST = async (req: NextRequest, res: NextResponse) => {
  try{
    await connectToDB();
    // const {email} = req.body;
    const searchParams = req.nextUrl.searchParams
    const email = searchParams.get('email')

    const existingEmail = await Email.findOne({ email });
    if (existingEmail) {
      return NextResponse.json({ error: 'Thankyou! You\'r Email is already registered.' }, { status: 200 });
    }

    const newEmail = new Email({email});
    await newEmail.save();
    return NextResponse.json({ message: 'Thankyou! You are successfully Registered.' }, { status: 200 })

  } catch(error){
    console.log(error);
    return NextResponse.json({ error: 'Email is Required! Kindly Enter your email.' }, { status: 500 })

  }
}

