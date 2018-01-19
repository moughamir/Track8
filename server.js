// security
const bcrypt = require('bcryotjs'),
// Database
db = require('mongoose'),
dbConnect = "mongodb://localhost/track8";


let showSchema = new db.Schema({
    _id: Number,
    name: String,
    airsDayOfWeek: String,
    airsTime: String,
    firstAired: Date,
    genre: [String],
    network: String,
    overview: String,
    rating: Number,
    ratingCount: Number,
    status: String,
    poster: String,
    subscribers: [{
        type: db.Schema.Types.ObjectId, ref: 'User'
    }],
    episodes: [{
        season: Number,
        episodeNumber: Number,
        episodeName: String,
        firstAired: Date,
        overview: String
    }]
});

let userSchema = new db.Schema({
    email: {
        type: String,
        unique: true
    },
    password: String
});

userSchema.pre('save', function(next){
    let user = this;
    if (!user.isModified('password')) {
        return next();
    }
    bcrypt.genSalt(10, function(err, salt){
        if (err) { 
            return next(err);
        }
        bcrypt.hash(user.password, salt, function(err, hash){
            if (err) {
                return next(err);
            }
            user.password = hash;
            next();
        });
    });
});

userSchema.methods.comparePassword = function(candidatePassword, cb){
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch){
        if (err) {
            return cb(err);
        }
        cb(null, isMatch);
    });
};

let User = db.model('User', userSchema),
    Show = db.model('Show', showSchema);
    
// connect to db
db.connect(dbConnect);


