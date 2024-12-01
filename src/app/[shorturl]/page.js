
import { redirect } from "next/navigation"
import clientPromise from "@/lib/mongodb"

export default async function Page({ params }) {
    const shorturl = (await params).shorturl

    let client=await clientPromise;
    let db=client.db("url_shorter")
    let collection=db.collection("urls")

    const doc = await collection.findOne({shorturl:shorturl})
    if(doc){
      redirect(doc.url)
    }
    else{
        redirect(`${process.env.NEXT_PUBLIC_HOST}`)
    }
  }