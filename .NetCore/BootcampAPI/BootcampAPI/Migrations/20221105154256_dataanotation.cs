using Microsoft.EntityFrameworkCore.Migrations;

namespace BootcampAPI.Migrations
{
    public partial class dataanotation : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Students_Grades_GradeId",
                table: "Students");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Students",
                table: "Students");

            migrationBuilder.DropColumn(
                name: "Weight",
                table: "Students");

            migrationBuilder.RenameTable(
                name: "Students",
                newName: "StudentMastes");

            migrationBuilder.RenameColumn(
                name: "StudentName",
                table: "StudentMastes",
                newName: "Name");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "StudentMastes",
                newName: "SID");

            migrationBuilder.RenameIndex(
                name: "IX_Students_GradeId",
                table: "StudentMastes",
                newName: "IX_StudentMastes_GradeId");

            migrationBuilder.AlterColumn<string>(
                name: "GradeName",
                table: "Grades",
                type: "nvarchar(25)",
                maxLength: 25,
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Name",
                table: "StudentMastes",
                type: "ntext",
                maxLength: 25,
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_StudentMastes",
                table: "StudentMastes",
                column: "SID");

            migrationBuilder.AddForeignKey(
                name: "FK_StudentMastes_Grades_GradeId",
                table: "StudentMastes",
                column: "GradeId",
                principalTable: "Grades",
                principalColumn: "GradeId",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_StudentMastes_Grades_GradeId",
                table: "StudentMastes");

            migrationBuilder.DropPrimaryKey(
                name: "PK_StudentMastes",
                table: "StudentMastes");

            migrationBuilder.RenameTable(
                name: "StudentMastes",
                newName: "Students");

            migrationBuilder.RenameColumn(
                name: "Name",
                table: "Students",
                newName: "StudentName");

            migrationBuilder.RenameColumn(
                name: "SID",
                table: "Students",
                newName: "Id");

            migrationBuilder.RenameIndex(
                name: "IX_StudentMastes_GradeId",
                table: "Students",
                newName: "IX_Students_GradeId");

            migrationBuilder.AlterColumn<string>(
                name: "GradeName",
                table: "Grades",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(25)",
                oldMaxLength: 25,
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "StudentName",
                table: "Students",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "ntext",
                oldMaxLength: 25,
                oldNullable: true);

            migrationBuilder.AddColumn<float>(
                name: "Weight",
                table: "Students",
                type: "real",
                nullable: false,
                defaultValue: 0f);

            migrationBuilder.AddPrimaryKey(
                name: "PK_Students",
                table: "Students",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Students_Grades_GradeId",
                table: "Students",
                column: "GradeId",
                principalTable: "Grades",
                principalColumn: "GradeId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
