import faker from 'faker'

faker.seed(600)
const randomSizeIndex = 3
const sizes = ['XS', 'S', 'M', 'L', 'XL']

export const makeFake = (index) => {
  return {
    "id": index + 1,
    "name": faker.name.findName(),
    "email": faker.internet.email(),
    "score":  faker.random.number(),
    "changeDate": faker.date.between('2019-09-01', '2020-03-06'),
    "size": sizes[Math.floor(index * randomSizeIndex % sizes.length )],
    "isMarried": faker.random.boolean(),
  };
};

const data = [...new Array(50)].map((_, index) => makeFake(index))

export default {
  "data": data
}