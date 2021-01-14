using Backend.Classes.Dto;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Backend.Resources
{
    public interface IPostResource
    {
        Task<int?> InsertNewPostAsync(int UserId, string message, string media, int? parentPostId);
        Task<IEnumerable<Post>> getPostsAsync(int offset, int? userId);
        Task<IEnumerable<Post>> getComments(int postId, int userId);
        Task<bool> BumpRate(int postId, int userId);
        Task<bool> DeBumpRate(int postId, int userId);

        Task<IEnumerable<User>> Login(string username, string password);
    }
}
