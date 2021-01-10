﻿using Backend.Classes.Dto;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Backend.Resources
{
    public interface IPostResource
    {
        Task<bool> InsertNewPostAsync(int UserId, string message);
        Task<IEnumerable<Post>> getPostsAsync(int offset);

    }
}