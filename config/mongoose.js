import mongoose from 'mongoose';

const Cluster_url = process.env.Cluster_url;

mongoose.connect(Cluster_url);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error: to Cluster'));

db.once('open', function() {

  console.log(`Connected to MongoDB at :: ${Cluster_url}`);

});

export default Cluster_url;
