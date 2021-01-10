using System.ComponentModel.DataAnnotations;

namespace Backend.Classes.Dto
{
    public class Post
    {
        [Required]
        public int? UserId { get; set; }
        [Required]
        public string Message { get; set; }
    }
}
