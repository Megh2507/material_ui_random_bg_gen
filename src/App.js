import React,{useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";

import CardContent from "@material-ui/core/CardContent";

import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import img1 from "./img1.avif";
import img2 from "./img2.avif";
import img3 from "./img3.avif"
import img4 from "./img4.avif";
const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#fff",
  },

  blogsContainer: {
    paddingTop: theme.spacing(3),
  },
  blogTitle: {
    fontWeight: 700,
    paddingBottom: theme.spacing(3),
    textAlign: "center",
  },
  card: {
    maxWidth: "100%",
    padding: "20px",
    // backgroundColor: "#e0dfdc",
    borderRadius:"20px",
    cursor:"pointer"
   
    
  },
  
  cardActions: {
    display: "flex",
    margin: "0 10px",
    // justifyContent: "space-between"
    color: "blue",
    alignItems: "center",
  },

  bw: {
    fontWeight: 700,
    fontSize: "30px",
  },
  cb: {
    fontWeight: 500,
    fontSize: "18px",
    color: "blue",
    marginBottom: "6px",
  },
}));

function App() {

  const classes = useStyles();
const [rc1,setRc1] = useState(false)
const [rc2,setRc2] = useState(false)
const [rc3,setRc3] = useState(false)
const [rc4,setRc4] = useState(false)
const [rc5,setRc5] = useState(false)
const [rc6,setRc6] = useState(false)

const pictureArray = [img1,img2,img3,img4];
const randomIndex = Math.floor(Math.random() * pictureArray.length);
const selectedPicture = pictureArray[randomIndex];

  return (
    <div className="App">
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <Typography variant="h6" color="primary">
            Resources
          </Typography>
        </Toolbar>
      </AppBar>

      <Container  maxWidth="lg" className={classes.blogsContainer}>
        <Typography variant="h4" className={classes.blogTitle}>
          Resources
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card} onClick={()=>setRc1(!rc1)} style={{backgroundImage: rc1 ? `url(${selectedPicture})` : 'none',}} >
              <CardActionArea>
                <CardContent >
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    className={classes.bw}
                  >
                    Make Safari your default browser
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Box ml={2}>
                    <Typography
                      variant="subtitle2"
                      component="p"
                      className={classes.cb}
                    >
                      Learn More
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <NavigateNextIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card} onClick={()=>setRc2(!rc2)} style={{backgroundImage: rc2 ? `url(${selectedPicture})` : 'none',}}>
              <CardActionArea>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    className={classes.bw}
                  >
                    Make Safari your default browser
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Box ml={2}>
                    <Typography
                      variant="subtitle2"
                      component="p"
                      className={classes.cb}
                    >
                      Learn More
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <NavigateNextIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card} onClick={()=>setRc3(!rc3)} style={{backgroundImage: rc3 ? `url(${selectedPicture})` : 'none',}}>
              <CardActionArea>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    className={classes.bw}
                  >
                    Make Safari your default browser
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Box ml={2}>
                    <Typography
                      variant="subtitle2"
                      component="p"
                      className={classes.cb}
                    >
                      Learn More
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <NavigateNextIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card} onClick={()=>setRc4(!rc4)} style={{backgroundImage: rc4 ? `url(${selectedPicture})` : 'none',}} >
              <CardActionArea>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    className={classes.bw}
                  >
                    Make Safari your default browser
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Box ml={2}>
                    <Typography
                      variant="subtitle2"
                      component="p"
                      className={classes.cb}
                    >
                      Learn More
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <NavigateNextIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card} onClick={()=>setRc5(!rc5)} style={{backgroundImage: rc5 ? `url(${selectedPicture})` : 'none',}}>
              <CardActionArea>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    className={classes.bw}
                  >
                    Make Safari your default browser
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Box ml={2}>
                    <Typography
                      variant="subtitle2"
                      component="p"
                      className={classes.cb}
                    >
                      Learn More
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <NavigateNextIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card} onClick={()=>setRc6(!rc6)} style={{backgroundImage: rc6  ? `url(${selectedPicture})` : 'none',}}>
              <CardActionArea>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    className={classes.bw}
                  >
                    Make Safari your default browser
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Box ml={2}>
                    <Typography
                      variant="subtitle2"
                      component="p"
                      className={classes.cb}
                    >
                      Learn More
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <NavigateNextIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
