using Backend.Classes.Dto;
using Backend.Database;
using System.Collections.Generic;
using System.Data;
using System.Threading.Tasks;

namespace Backend.Resources
{
    public class PostResource : IPostResource
    {
        private DbController _dbController;
        public PostResource(DbController dbController)
        {
            this._dbController = dbController;
        }

        public async Task<bool> BumpRate(int postId, int userId)
        {
            var parameters = new SqlParameters();
            parameters.Add("@PostId", SqlDbType.Int, postId);
            parameters.Add("@UserId", SqlDbType.Int, userId);
            var res = await _dbController.Querry("dbo.BumpRate", parameters);
            bool result = false;
            if (res.HasValue)
                result = res.Value == 1;
            return result;
        }

        public async Task<bool> DeBumpRate(int postId, int userId)
        {
            var parameters = new SqlParameters();
            parameters.Add("@PostId", SqlDbType.Int, postId);
            parameters.Add("@UserId", SqlDbType.Int, userId);
            var res = await _dbController.Querry("dbo.DeBumpRate", parameters);
            bool result = false;
            if (res.HasValue)
                result = res.Value == 1;
            return result;
        }

        public async Task<IEnumerable<Post>> getComments(int postId, int userId)
        {
            var parameters = new SqlParameters();
            parameters.Add("@PostId", SqlDbType.Int, postId);
            parameters.Add("@UserId", SqlDbType.Int, userId);
            var res = await _dbController.QuerryList<Post>("dbo.getPostComments", parameters);
            return res;
        }

        public async Task<IEnumerable<Post>> getPostsAsync(int offest, int? userId)
        {
            var parameters = new SqlParameters();
            parameters.Add("@Offset", SqlDbType.Int, offest);
            if (userId.HasValue)
            {
                parameters.Add("@UserId", SqlDbType.Int, userId.Value);
            }
            var res = await _dbController.QuerryList<Post>("dbo.getPosts", parameters);
            return res;
        }

        public async Task<int?> InsertNewPostAsync(int UserId, string message, string media, int? parentPostId)
        {
            var parameters = new SqlParameters();
            parameters.Add("@UserId", SqlDbType.Int, UserId);
            parameters.Add("@Message", SqlDbType.Text, message);
            parameters.Add("@Media", SqlDbType.Text, media);
            if (parentPostId.HasValue)
            {
                parameters.Add("@ParentPostId", SqlDbType.Int, parentPostId.Value);
            }
            var res = await _dbController.Querry("dbo.insertNewPost", parameters);
            return res;
        }

        public async Task<IEnumerable<User>> Login(string username, string password)
        {
            var parameters = new SqlParameters();
            parameters.Add("@Username", SqlDbType.VarChar, username, 256);
            parameters.Add("@Password", SqlDbType.VarChar, password, 256);
            var res = await _dbController.QuerryList<User>("dbo.LoginUser", parameters);
            return res;
        }
    }
}
