using System;

namespace Backend.Classes.Dto
{
    public class Post
    {
        public int? Id { get; set; }
        public int? UserId { get; set; }
        public DateTime CreateTime { get; set; }
        public string Message { get; set; }
        public int? Rate { get; set; }
        public string Username { get; set; }
        public string AvatarFilePath { get; set; }
        public string Media { get; set; }
        public int BumpedByYou { get; set; }
        public int Comments { get; set; }
    }
}
