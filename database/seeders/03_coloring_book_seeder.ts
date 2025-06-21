import { BaseSeeder } from '@adonisjs/lucid/seeders'
import ColoringBook from '#models/coloring_book'

export default class extends BaseSeeder {
  async run() {
    await ColoringBook.createMany([
      {
        titulo: 'Animales Fantásticos - Coco Wyo',
        autor: 'Coco Wyo',
        categoria: 'Criaturas Fantásticas',
        descripcion:
          'Explora un mundo mágico de criaturas míticas en este libro para colorear para adultos.',
        precio: 51960,
        activo: true,
        cantidadPaginas: 50,
        popularidad: 1200,
        pageRangeId: null,
      },
      {
        titulo: 'Mandalas para la Calma Mental',
        autor: 'Southern Lotus',
        categoria: 'Mandala',
        descripcion:
          'Una colección relajante de mandalas para aliviar el estrés y meditar mientras coloreas.',
        precio: 39960,
        activo: true,
        cantidadPaginas: 60,
        popularidad: 3000,
        pageRangeId: null,
      },
      {
        titulo: 'Patrones Animales Intrincados',
        autor: 'Coco Wyo',
        categoria: 'Naturaleza',
        descripcion: 'Diseños detallados de patrones animales para estimular tu creatividad.',
        precio: 46000,
        activo: true,
        cantidadPaginas: 45,
        popularidad: 950,
        pageRangeId: null,
      },
      {
        titulo: 'Días Cómodos - Libro para Colorear',
        autor: 'Southern Lotus',
        categoria: 'Estilo de Vida',
        descripcion:
          'Relájate coloreando escenas acogedoras y reconfortantes para todas las edades.',
        precio: 59960,
        activo: false,
        cantidadPaginas: 70,
        popularidad: 2100,
        pageRangeId: null,
      },
      {
        titulo: 'Mundo Místico y Fantástico',
        autor: 'Coco Wyo',
        categoria: 'Fantasía Oscura',
        descripcion:
          'Ilustraciones místicas y mágicas con escenarios encantados y seres fantásticos.',
        precio: 55000,
        activo: true,
        cantidadPaginas: 55,
        popularidad: 500,
        pageRangeId: null,
      },
      {
        titulo: 'Colorear por Números para Adultos',
        autor: 'Southern Lotus',
        categoria: 'Relajación',
        descripcion:
          'Un método fácil y relajante para colorear bellas imágenes guiándote por números.',
        precio: 42000,
        activo: false,
        cantidadPaginas: 40,
        popularidad: 1900,
        pageRangeId: null,
      },
    ])
  }
}
