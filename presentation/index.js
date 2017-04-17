// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Image,
  CodePane,
  Code
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  data: require("../assets/data.png"),
  noaahc: require("../assets/noaahc.png"),
  mapapp: require("../assets/mapapp.png"),
  onem: require("../assets/1m.png"),
  mapeditor: require("../assets/mapeditor.png"),
  agoassistant: require("../assets/agoassistant.png"),
  ikea: require("../assets/ikea.gif"),
  // city: require("../assets/city.jpg"),
  // kat: require("../assets/kat.png"),
  // logo: require("../assets/formidable-logo.svg"),
  // markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});
//On this day in 1913, Henry Ford installs the first moving ____?_____
//for the mass production of an entire automobile. His innovation
//reduced the time it took to build a car from more than 12 hours to
//two hours and 30 minutes.
//
//What is ArcGIS Online's Assembly line?

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            The Web Map
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Joshua Tanner
          </Text>
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            State of Oregon Geospatial Enterprise Office
          </Text>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            App Development
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            in the world of
          </Text>
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Web GIS
          </Text>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Data
          </Heading>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Image src={images.data} />
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Map
          </Heading>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Create Map
          </Text>
          <CodePane lang="js" source={require("raw-loader!../assets/code/map.example")} margin="20px auto" />
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Add Layer
          </Text>
          <CodePane lang="js" source={require("raw-loader!../assets/code/addFL.example")} margin="20px auto" />
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Define Renderer with Symbol
          </Text>
          <CodePane lang="js" source={require("raw-loader!../assets/code/defineRender.example")} margin="20px auto" />
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Define Popup
          </Text>
          <CodePane lang="js" source={require("raw-loader!../assets/code/popup.example")} margin="20px auto" />
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            more layers
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            layer visibility
          </Text>
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            add icons
          </Text>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            add different service protocols...
          </Text>
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            rinse. repeat.
          </Text>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            App
          </Heading>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Image src={images.noaahc} />
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Image src={images.mapapp} />
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            What Is A
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Web Map
          </Text>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            A Standard
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            <a href="https://developers.arcgis.com/web-map-specification/" target="_blank">Specification</a>
          </Text>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            JSON
          </Heading>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <CodePane lang="js" source={require("raw-loader!../assets/code/webmapspec.example")} margin="20px auto" />
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            basemap
          </Text>
          <CodePane lang="js" source={require("raw-loader!../assets/code/basemapspec.example")} margin="20px auto" />
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Operational Layers
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            CSV, FeatureLayer, GeoRSS, KML, WMS, WMTS, WFS, Tiled Layer, etc.
          </Text>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <CodePane lang="js" source={require("raw-loader!../assets/code/flspec.example")} margin="20px auto" />
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <CodePane lang="js" source={require("raw-loader!../assets/code/csvlayer.example")} margin="20px auto" />
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <CodePane lang="js" source={require("raw-loader!../assets/code/popupspec.example")} margin="20px auto" />
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <CodePane lang="js" source={require("raw-loader!../assets/code/drawspec.example")} margin="20px auto" />
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <CodePane lang="js" source={require("raw-loader!../assets/code/heatmap.example")} margin="20px auto" />
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Why Is This
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Important
          </Text>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Define Once
          </Heading>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
            Use Many
          </Heading>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Image src={images.onem} />
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            How Do I
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Edit Web Map JSON
          </Text>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Image src={images.mapeditor} />
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Image src={images.agoassistant} />
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Life Before Web Maps
          </Text>
          <Image src={images.ikea} />
        </Slide>
      </Deck>
    );
  }
}
