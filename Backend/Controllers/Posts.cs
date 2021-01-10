using Backend.Classes.Dto;
using Backend.Resources;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.ComponentModel.DataAnnotations;
using System.Threading.Tasks;

namespace Backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    [EnableCors]
    public class Posts : ControllerBase
    {
        private readonly ILogger<Posts> _logger;
        private IPostResource _postResource;

        public Posts(ILogger<Posts> logger, IPostResource postresource)
        {
            _logger = logger;
            _postResource = postresource;
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody][Required] Post post)
        {
            await _postResource.InsertNewPostAsync(post.UserId.Value, post.Message);
            return Ok();
        }
    }
}
