using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Reflektionsappen.Identity.Models;

namespace Reflektionsappen.Identity
{
    public class IdentityContext : IdentityDbContext<ApplicationUser>
    {
        private readonly IConfiguration configuration;

        public IdentityContext(IConfiguration configuration)
        {
            this.configuration = configuration;
        }

        protected override void OnConfiguring (DbContextOptionsBuilder optionsBuilder) =>
            optionsBuilder.UseSqlite(configuration.GetConnectionString("DefaultConnection"));
    }
}
