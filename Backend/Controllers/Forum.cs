using Backend.Classes.Dto;
using Backend.Resources;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    [EnableCors]
    public class Forum : ControllerBase
    {
        private readonly ILogger<Forum> _logger;
        private IPostResource _postResource;

        public Forum(ILogger<Forum> logger, IPostResource postresource)
        {
            _logger = logger;
            _postResource = postresource;
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody][Required] NewPost post)
        {
            await _postResource.InsertNewPostAsync(post.UserId.Value, post.Message);
            return Ok();
        }

        [HttpGet("{offset}")]
        public async Task<IActionResult> GetPosts([FromRoute][Required] int offset)
        {
            var posts = await _postResource.getPostsAsync(offset);
            return Ok(posts);
        }

        [HttpPost("Login")]
        public async Task<IActionResult> Login([FromBody][Required] LoginData data)
        {
            var user = await _postResource.Login(data.Username, data.Password);
            return Ok(user.FirstOrDefault());
        }
    }
}
