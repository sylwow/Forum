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
            await _postResource.InsertNewPostAsync(post.UserId.Value, post.Message, post.Media);
            return Ok();
        }

        [HttpGet("{offset}/{userId}")]
        public async Task<IActionResult> GetPosts([FromRoute][Required] int offset, [FromRoute][Required] int userId)
        {
            var posts = await _postResource.getPostsAsync(offset, userId);
            return Ok(posts);
        }

        [HttpGet("BumpRate/{postId}/{userId}")]
        public async Task<IActionResult> BumpRate([FromRoute][Required] int postId, [FromRoute][Required] int userId)
        {
            var posts = await _postResource.BumpRate(postId, userId);
            return Ok(posts);
        }

        [HttpGet("DeBumpRate/{postId}/{userId}")]
        public async Task<IActionResult> DeBumpRate([FromRoute][Required] int postId, [FromRoute][Required] int userId)
        {
            var posts = await _postResource.DeBumpRate(postId, userId);
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
