export interface Reddit 
{
    data:
    {
        children:
        [
            {
                data: 
                {
                    title: String, 
                    thumbnail: String,
                    permalink: String,
                    secure_media:
                        {
                            reddit_video:{
                                scrubber_media_url:String
                            }
                        }
                }
            
            }
        ]
    }
}
