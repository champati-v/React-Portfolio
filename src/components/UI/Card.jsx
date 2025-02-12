import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { Link2Icon } from 'lucide-react';
import { HeartIcon } from 'lucide-react';

export default function ActionAreaCard({title, description, image, projectLink}) {

  const [liked, setLiked] = useState(false)

  const toggleLike = () => {
    setLiked(!liked)
  }

  return (
    <Card sx={{ maxWidth: 345, bgcolor: 'grey.900', color: 'white' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography className='uppercase underline' gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" className='text-white' >
            {description}
          </Typography>
        </CardContent>

        <div className='flex items-center justify-between px-4 mb-2'>
          <HeartIcon onClick={toggleLike}  className={liked ? " fill-red-500" : 'text-white'} />
          <a href={projectLink} target='_blank' rel='noreferrer'>
            <button className='flex items-center gap-1 cursor-pointer'>Link <Link2Icon/> </button>
          </a>
        </div>
      </CardActionArea>
    </Card>
  );
}