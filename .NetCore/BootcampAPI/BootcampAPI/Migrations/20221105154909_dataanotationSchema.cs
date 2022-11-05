using Microsoft.EntityFrameworkCore.Migrations;

namespace BootcampAPI.Migrations
{
    public partial class dataanotationSchema : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.EnsureSchema(
                name: "Back");

            migrationBuilder.RenameTable(
                name: "StudentMastes",
                newName: "StudentMastes",
                newSchema: "Back");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameTable(
                name: "StudentMastes",
                schema: "Back",
                newName: "StudentMastes");
        }
    }
}
