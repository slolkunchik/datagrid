import faker from 'faker'

faker.seed(600)

export const sizes = [
  {
    weight: 0,
    value: 'XS',
    label: 'XS',
  },
  {
    weight: 1,
    value: 'S',
    label: 'S',
  },
  {
    weight: 2,
    value: 'M',
    label: 'M',
  },
  {
    weight: 3,
    value: 'L',
    label: 'L',
  },
  {
    weight: 4,
    value: 'XL',
    label: 'XL',
  }]

const makeFake = (index) => {
  return {
    "id": index + 1,
    "name": faker.name.findName(),
    "email": faker.internet.email(),
    "score":  faker.random.number(),
    "changeDate": faker.date.between('2019-09-01', '2020-03-06'),
    "size": sizes[faker.random.number({min:0, max:4})],
    "isMarried": faker.random.boolean(),
  };
};

const data = [...new Array(1000)].map((_, index) => makeFake(index))

export default data
