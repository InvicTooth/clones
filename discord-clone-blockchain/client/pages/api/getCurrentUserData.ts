import { client } from '@/lib/client'

const getCurrentUserData = async(req, res) => {
  const query = `*[_type == "users" && walletAddress == "${req.query.accountAddress}"]{
    name,
    "avatar": profileImage.asset->url
  }`

  try {
    const sanityResponse = await client.fetch(query)

    res.status(200).send(sanityResponse[0])
  } catch (error){
    console.error(error)
    res.status(500).send(error)
  }
}

export default getCurrentUserData