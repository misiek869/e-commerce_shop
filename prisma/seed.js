import { PrismaClient } from '@prisma/client'
import fs from 'fs'
import path from 'path'
const prisma = new PrismaClient()

async function main() {
	const dataPath = path.join(process.cwd(), 'testData/products.json')
	const jsonData = fs.readFileSync(dataPath, 'utf-8')
	const products = JSON.parse(jsonData)

	await prisma.product.deleteMany()

	for (const product of products) {
		await prisma.product.create({
			data: product,
		})
	}
}

main()
	.then(async () => {
		await prisma.$disconnect()
	})
	.catch(async e => {
		console.log(e)
		await prisma.$disconnect()
		process.exit(1)
	})
