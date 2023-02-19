import mongoose from 'mongoose'

mongoose.set('strictQuery', true);
main()

async function main() {
  try {
    await mongoose.connect(process.env.DATABASE_URL || 'mongodb://localhost/movies');
    console.log("we're connected to mongodb");
  } catch(err) {
    console.log(err);
  }
}