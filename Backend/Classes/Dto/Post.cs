﻿using System;

namespace Backend.Classes.Dto
{
    public class Post
    {
        public int? UserId { get; set; }
        public DateTime CreateTime { get; set; }
        public string Message { get; set; }
        public int? Rate { get; set; }
    }
}
