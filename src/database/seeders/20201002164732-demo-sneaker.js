'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			'Sneakers',
			[
				{
					brandName: 'Nike',
					model: 'Jordan',
					picture: 'jordan.jpeg',
					releaseDate: '1990-08-12 14:53:14.924+02',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					brandName: 'Nike',
					model: 'Hundred',
					picture: 'hundred.jpeg',
					releaseDate: '1985-10-02 15:53:32.924+02',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					brandName: 'Fila',
					model: 'Disruptor',
					picture: 'disruptor.jpeg',
					releaseDate: '1995-06-03 18:33:45.924+02',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					brandName: 'All Star',
					model: 'DH',
					picture: 'dh.jpeg',
					releaseDate: '1998-04-11 20:42:50.924+02',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					brandName: 'Rock',
					model: 'Rockfield',
					picture: 'rockfield.jpeg',
					releaseDate: '2000-05-12 21:00:21.924+02',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					brandName: 'Mango',
					model: 'Magnolia',
					picture: 'magnolia.jpeg',
					releaseDate: '2005-01-02 11:10:20.924+02',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					brandName: 'Addidas',
					model: 'Cortege',
					picture: 'laceup.jpeg',
					releaseDate: '2003-07-09 14:19:25.924+02',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					brandName: 'Fab DC',
					model: 'Fabric',
					picture: 'fabric.jpeg',
					releaseDate: '2004-08-02 15:18:30.924+02',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					brandName: 'Puma',
					model: 'Fast',
					picture: 'fast.jpeg',
					releaseDate: '2001-02-02 17:19:30.924+02',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					brandName: 'Bale',
					model: 'Balenciaga',
					picture: 'fast.jpeg',
					releaseDate: '1987-10-24 12:20:31.924+02',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					brandName: 'Addidas',
					model: 'Lauren',
					picture: 'lauren.jpeg',
					releaseDate: '1997-11-29 04:21:36.924+02',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					brandName: 'Nike',
					model: 'White',
					picture: 'white.jpeg',
					releaseDate: '1996-09-22 06:41:39.924+02',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					brandName: 'Bucci',
					model: 'Bacca Bucci',
					picture: 'baccabuci.jpg',
					releaseDate: '2004-04-21 07:35:34.924+02',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('Sneakers', null, {});
	},
};
