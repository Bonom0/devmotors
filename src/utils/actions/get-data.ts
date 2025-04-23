export async function getDataHome(){
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/objects/68091be59482db3d989cdf9f?pretty=true&read_key=${process.env.READ_KEY}&depth=1&props=slug,title,metadata,type`)

    if(!res.ok){
      throw new Error("Failed to fetch data")
    }

    return res.json();

  }catch(err){
    throw new Error("Failed to fetch data")
  }
}