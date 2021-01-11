using System.ComponentModel.DataAnnotations;

namespace Backend.Classes.Dto
{
    public class LoginData
    {
        [Required]
        public string Username { get; set; }
        [Required]
        public string Password { get; set; }
    }
}
