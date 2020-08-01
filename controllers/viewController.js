
exports.getHome = (req, res, next)=>{

    res.status(200).render('base');
}

exports.getGallery = (req, res, next)=>{

    res.status(200).render('gallery');
}