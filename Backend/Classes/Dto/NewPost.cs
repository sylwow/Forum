using System.ComponentModel.DataAnnotations;

namespace Backend.Classes.Dto
{
    public class NewPost
    {
        [Required]
        public int? UserId { get; set; }
        [Required]
        public string Message { get; set; }
        public string Media { get; set; }
        public int? ParentPostId { get; set; }
    }
}
