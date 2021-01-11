using System;

namespace Backend.Classes.Dto
{
    public class Post
    {
        public int? UserId { get; set; }
        public DateTime CreateTime { get; set; }
        public string Message { get; set; }
        public int? Rate { get; set; }
        public string Username { get; set; }
        public string AvatarFilePath { get; set; }
    }
}
