using System.Threading.Tasks;

namespace Backend.Resources
{
    public interface IPostResource
    {
        Task<bool> InsertNewPostAsync(int UserId, string message);
    }
}
