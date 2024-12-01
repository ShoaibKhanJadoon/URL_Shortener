import clientPromise from "@/lib/mongodb"

export async function POST(request) {

    const body=await request.json()
    let client=await clientPromise;
    let db=client.db("url_shorter")
    let collection=db.collection("urls")
    
    const doc = await collection.findOne({shorturl:body.shorturl})
    if(doc){
      return Response.json({ success:false, error:true, message: "url already exists"})
    }
    const result= await collection.insertOne({
      url:body.url,
      shorturl:body.shorturl

    })
    return Response.json({
      body
    })
  }