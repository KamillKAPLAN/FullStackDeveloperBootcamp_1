USE [master]
GO
/****** Object:  Database [DBFullStack]    Script Date: 10/30/2022 6:32:07 PM ******/
CREATE DATABASE [DBFullStack]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'DBFullStack', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\DBFullStack.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'DBFullStack_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\DBFullStack_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [DBFullStack] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [DBFullStack].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [DBFullStack] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [DBFullStack] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [DBFullStack] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [DBFullStack] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [DBFullStack] SET ARITHABORT OFF 
GO
ALTER DATABASE [DBFullStack] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [DBFullStack] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [DBFullStack] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [DBFullStack] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [DBFullStack] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [DBFullStack] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [DBFullStack] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [DBFullStack] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [DBFullStack] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [DBFullStack] SET  DISABLE_BROKER 
GO
ALTER DATABASE [DBFullStack] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [DBFullStack] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [DBFullStack] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [DBFullStack] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [DBFullStack] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [DBFullStack] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [DBFullStack] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [DBFullStack] SET RECOVERY FULL 
GO
ALTER DATABASE [DBFullStack] SET  MULTI_USER 
GO
ALTER DATABASE [DBFullStack] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [DBFullStack] SET DB_CHAINING OFF 
GO
ALTER DATABASE [DBFullStack] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [DBFullStack] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [DBFullStack] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [DBFullStack] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
EXEC sys.sp_db_vardecimal_storage_format N'DBFullStack', N'ON'
GO
ALTER DATABASE [DBFullStack] SET QUERY_STORE = OFF
GO
USE [DBFullStack]
GO
/****** Object:  Table [dbo].[__EFMigrationsHistory]    Script Date: 10/30/2022 6:32:07 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[__EFMigrationsHistory](
	[MigrationId] [nvarchar](150) NOT NULL,
	[ProductVersion] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY CLUSTERED 
(
	[MigrationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Movies]    Script Date: 10/30/2022 6:32:07 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Movies](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Title] [nvarchar](max) NULL,
	[Type] [nvarchar](max) NULL,
	[ReleaseDate] [datetime2](7) NOT NULL,
	[CreatedAt] [datetime2](7) NOT NULL,
	[CreatedBy] [int] NOT NULL,
	[UpdatedAt] [datetime2](7) NOT NULL,
	[UpdatedBy] [int] NOT NULL,
	[DeletedAt] [datetime2](7) NOT NULL,
	[IsDeleted] [bit] NOT NULL,
 CONSTRAINT [PK_Movies] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Persons]    Script Date: 10/30/2022 6:32:07 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Persons](
	[PersonID] [int] IDENTITY(1,1) NOT NULL,
	[LastName] [varchar](255) NULL,
	[FirstName] [varchar](255) NULL,
	[Address] [varchar](255) NULL,
	[City] [varchar](255) NULL,
	[Age] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[PersonID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20221030142054_initial', N'5.0.17')
GO
SET IDENTITY_INSERT [dbo].[Movies] ON 

INSERT [dbo].[Movies] ([Id], [Title], [Type], [ReleaseDate], [CreatedAt], [CreatedBy], [UpdatedAt], [UpdatedBy], [DeletedAt], [IsDeleted]) VALUES (3, N'Yıldızlar Arasında', N'Kome', CAST(N'2021-07-07T00:00:00.0000000' AS DateTime2), CAST(N'2020-05-04T00:00:00.0000000' AS DateTime2), 1, CAST(N'2005-05-03T00:00:00.0000000' AS DateTime2), 1, CAST(N'2005-05-03T00:00:00.0000000' AS DateTime2), 0)
INSERT [dbo].[Movies] ([Id], [Title], [Type], [ReleaseDate], [CreatedAt], [CreatedBy], [UpdatedAt], [UpdatedBy], [DeletedAt], [IsDeleted]) VALUES (5, N'Matrix', N'Korku', CAST(N'2021-07-07T00:00:00.0000000' AS DateTime2), CAST(N'2021-07-07T00:00:00.0000000' AS DateTime2), 2, CAST(N'2021-07-07T00:00:00.0000000' AS DateTime2), 3, CAST(N'2021-07-07T00:00:00.0000000' AS DateTime2), 0)
INSERT [dbo].[Movies] ([Id], [Title], [Type], [ReleaseDate], [CreatedAt], [CreatedBy], [UpdatedAt], [UpdatedBy], [DeletedAt], [IsDeleted]) VALUES (6, N'Titanic', N'Romentik Komedi', CAST(N'2022-10-30T15:09:26.0510000' AS DateTime2), CAST(N'2022-10-30T15:09:26.0510000' AS DateTime2), 0, CAST(N'2022-10-30T15:09:26.0510000' AS DateTime2), 0, CAST(N'2022-10-30T15:09:26.0510000' AS DateTime2), 1)
SET IDENTITY_INSERT [dbo].[Movies] OFF
GO
SET IDENTITY_INSERT [dbo].[Persons] ON 

INSERT [dbo].[Persons] ([PersonID], [LastName], [FirstName], [Address], [City], [Age]) VALUES (1, N'KAPLAN', N'Kamil', N'Zafer Mah.', N'Istanbul', 28)
INSERT [dbo].[Persons] ([PersonID], [LastName], [FirstName], [Address], [City], [Age]) VALUES (3, N'Burasi bos deger', N'Ahmet', N'ankarada Cad.', N'Ankara', 20)
INSERT [dbo].[Persons] ([PersonID], [LastName], [FirstName], [Address], [City], [Age]) VALUES (4, N'Burasi bos deger', N'Mehmet', N'bostanci cad.', N'Izmir', 24)
INSERT [dbo].[Persons] ([PersonID], [LastName], [FirstName], [Address], [City], [Age]) VALUES (5, N'Burasi bos deger', N'Sivri', N'konyaalt icad.', N'Antalya', 23)
INSERT [dbo].[Persons] ([PersonID], [LastName], [FirstName], [Address], [City], [Age]) VALUES (6, N'Burasi bos deger', N'Yildirim', N'Datça Mah.', N'Mugla', 24)
INSERT [dbo].[Persons] ([PersonID], [LastName], [FirstName], [Address], [City], [Age]) VALUES (7, N'Burasi bos deger', N'Yagmur', N'Sahinbey Mah.', N'Gaziantep', 26)
INSERT [dbo].[Persons] ([PersonID], [LastName], [FirstName], [Address], [City], [Age]) VALUES (8, N'Burasi bos deger', N'Kaya', N'Cumhuriyet Mah.', N'Erzincan', 25)
INSERT [dbo].[Persons] ([PersonID], [LastName], [FirstName], [Address], [City], [Age]) VALUES (9, N'Sipahioglu', N'Furkan', N'Cosarsu Mah.', N'Istanbul', 26)
INSERT [dbo].[Persons] ([PersonID], [LastName], [FirstName], [Address], [City], [Age]) VALUES (11, N'Yildirim', N'Berkay', N'Mahmutbey Mah.', N'Istanbul', 19)
INSERT [dbo].[Persons] ([PersonID], [LastName], [FirstName], [Address], [City], [Age]) VALUES (12, N'Kiliç', N'Hamza', N'Corum Mah.', N'Çorum', 24)
INSERT [dbo].[Persons] ([PersonID], [LastName], [FirstName], [Address], [City], [Age]) VALUES (13, N'Üçsu', N'Batuhan', N'ankara mah.', N'ankara', 19)
SET IDENTITY_INSERT [dbo].[Persons] OFF
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [UQ__Persons2__B31331C9DA882BBD]    Script Date: 10/30/2022 6:32:07 PM ******/
ALTER TABLE [dbo].[Persons] ADD UNIQUE NONCLUSTERED 
(
	[FirstName] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Persons] ADD  DEFAULT ('Burasi bos deger') FOR [LastName]
GO
ALTER TABLE [dbo].[Persons]  WITH CHECK ADD CHECK  (([Age]>(18)))
GO
USE [master]
GO
ALTER DATABASE [DBFullStack] SET  READ_WRITE 
GO
