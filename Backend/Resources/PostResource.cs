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

        public async Task<IEnumerable<Post>> getPostsAsync(int offest)
        {
            var parameters = new SqlParameters();
            parameters.Add("@Offset", SqlDbType.Int, offest);
            var res = await _dbController.QuerryList<Post>("dbo.getPosts", parameters);
            return res;
        }

        public async Task<bool> InsertNewPostAsync(int UserId, string message, string media)
        {
            var parameters = new SqlParameters();
            parameters.Add("@UserId", SqlDbType.Int, UserId);
            parameters.Add("@Message", SqlDbType.Text, message);
            parameters.Add("@Media", SqlDbType.Text, media);
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
