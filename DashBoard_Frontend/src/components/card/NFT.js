// // Chakra imports
// import {
//   AvatarGroup,
//   Avatar,
//   Box,
//   Button,
//   Flex,
//   Icon,
//   Image,
//   Link,
//   Text,
//   useColorModeValue,
// } from "@chakra-ui/react";
// // Custom components
// import Card from "components/card/Card.js";
// // Assets
// import React, { useState } from "react";
// import { IoHeart, IoHeartOutline } from "react-icons/io5";

// export default function NFT(props) {
//   const { image, name, author, bidders, download, currentbid } = props;
//   const [like, setLike] = useState(false);
//   const [userBid, setUserBid] = useState("");
//   const textColor = useColorModeValue("navy.700", "white");
//   const textColorBid = useColorModeValue("brand.500", "white");
//   // Handle user's bid input change
//   const handleUserBidChange = (event) => {
//     setUserBid(event.target.value);
//   };

//   // Determine if the user's bid is lower than the default bid
//   const isUserBidLower = parseFloat(userBid) < parseFloat(currentbid);

//   return (
//     <Card p="20px">
//       <Flex direction={{ base: "column" }} justify="center">
//         <Box mb={{ base: "20px", "2xl": "20px" }} position="relative">
//           <Image
//             src={image}
//             w={{ base: "100%", "3xl": "100%" }}
//             h={{ base: "100%", "3xl": "100%" }}
//             borderRadius="20px"
//           />
//           <Button
//             position="absolute"
//             bg="white"
//             _hover={{ bg: "whiteAlpha.900" }}
//             _active={{ bg: "white" }}
//             _focus={{ bg: "white" }}
//             p="0px !important"
//             top="14px"
//             right="14px"
//             borderRadius="50%"
//             minW="36px"
//             h="36px"
//             onClick={() => {
//               setLike(!like);
//             }}
//           >
//             <Icon
//               transition="0.2s linear"
//               w="20px"
//               h="20px"
//               as={like ? IoHeart : IoHeartOutline}
//               color="brand.500"
//             />
//           </Button>
//         </Box>
//         <Flex flexDirection="column" justify="space-between" h="100%">
//           <Flex
//             justify="space-between"
//             direction={{
//               base: "row",
//               md: "column",
//               lg: "row",
//               xl: "column",
//               "2xl": "row",
//             }}
//             mb="auto"
//           >
//             <Flex direction="column">
//               <Text
//                 color={textColor}
//                 fontSize={{
//                   base: "xl",
//                   md: "lg",
//                   lg: "lg",
//                   xl: "lg",
//                   "2xl": "md",
//                   "3xl": "lg",
//                 }}
//                 mb="5px"
//                 fontWeight="bold"
//                 me="14px"
//               >
//                 {name}
//               </Text>
//               <Text
//                 color="secondaryGray.600"
//                 fontSize={{
//                   base: "sm",
//                 }}
//                 fontWeight="400"
//                 me="14px"
//               >
//                 {author}
//               </Text>
//             </Flex>
//             <AvatarGroup
//               max={3}
//               color={textColorBid}
//               size="sm"
//               mt={{
//                 base: "0px",
//                 md: "10px",
//                 lg: "0px",
//                 xl: "10px",
//                 "2xl": "0px",
//               }}
//               fontSize="12px"
//             >
//               {bidders.map((avt, key) => (
//                 <Avatar key={key} src={avt} />
//               ))}
//             </AvatarGroup>
//           </Flex>
//           <Flex
//             align="start"
//             justify="space-between"
//             direction={{
//               base: "row",
//               md: "column",
//               lg: "row",
//               xl: "column",
//               "2xl": "row",
//             }}
//             mt="25px"
//           >
//             <Text fontWeight="700" fontSize="sm" color={textColorBid}>
//               Default Bid: {currentbid}
//             </Text>
//             <form>
//               <input
//                 type="text"
//                 placeholder="Your Bid Amount"
//                 style={{
//                   border: "1px solid #ccc",
//                   padding: "10px",
//                   marginRight: "10px",
//                 }}
//               />
//               <Link
//                 href={download}
//                 mt={{
//                   base: "0px",
//                   md: "10px",
//                   lg: "0px",
//                   xl: "10px",
//                   "2xl": "0px",
//                 }}
//               >
//                 <Button
//                   variant="darkBrand"
//                   color="white"
//                   fontSize="sm"
//                   fontWeight="500"
//                   borderRadius="70px"
//                   px="24px"
//                   py="5px"
//                 >
//                   Place Bid
//                 </Button>
//               </Link>
//             </form>
//           </Flex>
//         </Flex>
//       </Flex>
//     </Card>
//   );
// }

// better code for it

// Chakra imports
// import {
//   AvatarGroup,
//   Avatar,
//   Box,
//   Button,
//   Flex,
//   Icon,
//   Image,
//   Link,
//   Text,
//   useColorModeValue,
// } from "@chakra-ui/react";
// // Custom components
// import Card from "components/card/Card.js";
// // Assets
// import React, { useState } from "react";
// import { IoHeart, IoHeartOutline } from "react-icons/io5";

// export default function NFT(props) {
//   const { image, name, author, bidders, download, currentbid } = props;
//   const [like, setLike] = useState(false);
//   const [userBid, setUserBid] = useState(""); // State to store the user's bid
//   const [bidPlaced, setBidPlaced] = useState(false);
//   const textColor = useColorModeValue("navy.700", "white");
//   const textColorBid = useColorModeValue("brand.500", "white");

//   // Handle user's bid input change
//   const handleUserBidChange = (event) => {
//     setUserBid(event.target.value);
//   };

//   // Determine if the user's bid is lower than the default bid
//   const isUserBidLower = parseFloat(userBid) < parseFloat(currentbid);

//   // Handle user bid submission
//   const handleUserBidSubmit = (event) => {
//     event.preventDefault();

//     // Your bid handling logic here
//     // For example, you can send the user's bid to the server or update the UI
//     // based on the user's bid.

//     if (parseFloat(userBid) < parseFloat(currentbid)) {
//       // Handle the case where the user's bid is lower than the default bid
//       setBidPlaced(true); // Mark that a bid has been placed
//     } else {
//       // Handle the case where the user's bid is acceptable
//     }
//   };
//   return (
//     <Card p="20px">
//       <Flex direction={{ base: "column" }} justify="center">
//         <Box mb={{ base: "20px", "2xl": "20px" }} position="relative">
//           <Image
//             src={image}
//             w={{ base: "100%", "3xl": "100%" }}
//             h={{ base: "100%", "3xl": "100%" }}
//             borderRadius="20px"
//           />
//           <Button
//             position="absolute"
//             bg="white"
//             _hover={{ bg: "whiteAlpha.900" }}
//             _active={{ bg: "white" }}
//             _focus={{ bg: "white" }}
//             p="0px !important"
//             top="14px"
//             right="14px"
//             borderRadius="50%"
//             minW="36px"
//             h="36px"
//             onClick={() => {
//               setLike(!like);
//             }}
//           >
//             <Icon
//               transition="0.2s linear"
//               w="20px"
//               h="20px"
//               as={like ? IoHeart : IoHeartOutline}
//               color="brand.500"
//             />
//           </Button>
//         </Box>
//         <Flex flexDirection="column" justify="space-between" h="100%">
//           <Flex
//             justify="space-between"
//             direction={{
//               base: "row",
//               md: "column",
//               lg: "row",
//               xl: "column",
//               "2xl": "row",
//             }}
//             mb="auto"
//           >
//             <Flex direction="column">
//               <Text
//                 color={textColor}
//                 fontSize={{
//                   base: "xl",
//                   md: "lg",
//                   lg: "lg",
//                   xl: "lg",
//                   "2xl": "md",
//                   "3xl": "lg",
//                 }}
//                 mb="5px"
//                 fontWeight="bold"
//                 me="14px"
//               >
//                 {name}
//               </Text>
//               <Text
//                 color="secondaryGray.600"
//                 fontSize={{
//                   base: "sm",
//                 }}
//                 fontWeight="400"
//                 me="14px"
//               >
//                 {author}
//               </Text>
//             </Flex>
//             <AvatarGroup
//               max={3}
//               color={textColorBid}
//               size="sm"
//               mt={{
//                 base: "0px",
//                 md: "10px",
//                 lg: "0px",
//                 xl: "10px",
//                 "2xl": "0px",
//               }}
//               fontSize="12px"
//             >
//               {bidders.map((avt, key) => (
//                 <Avatar key={key} src={avt} />
//               ))}
//             </AvatarGroup>
//           </Flex>
//           <Flex
//             align="start"
//             justify="space-between"
//             direction={{
//               base: "row",
//               md: "column",
//               lg: "row",
//               xl: "column",
//               "2xl": "row",
//             }}
//             mt="25px"
//           >
//             <Text fontWeight="700" fontSize="sm" color={textColorBid}>
//               Minimum Bid: {currentbid}
//             </Text>
//             <form onSubmit={handleUserBidSubmit}>
//               <input
//                 type="text"
//                 placeholder="Your Bid Amount"
//                 style={{
//                   border: "1px solid #ccc",
//                   padding: "10px",
//                   marginRight: "10px",
//                 }}
//                 onChange={handleUserBidChange}
//                 value={userBid}
//               />
//               <Link
//                 href={download}
//                 mt={{
//                   base: "0px",
//                   md: "10px",
//                   lg: "0px",
//                   xl: "10px",
//                   "2xl": "0px",
//                 }}
//               >
//                 <Button
//                   type="submit" // Add type="submit" to the button to trigger form submission
//                   variant="darkBrand"
//                   color="white"
//                   fontSize="sm"
//                   fontWeight="500"
//                   borderRadius="70px"
//                   px="24px"
//                   py="5px"
//                 >
//                   Place Bid
//                 </Button>
//               </Link>
//             </form>
//           </Flex>
//           {isUserBidLower && ( // Conditionally render if user's bid is lower
//             <Flex
//               align="start"
//               justify="space-between"
//               direction={{
//                 base: "row",
//                 md: "column",
//                 lg: "row",
//                 xl: "column",
//                 "2xl": "row",
//               }}
//               mt="10px" // Adjust the spacing as needed
//             >
//               <Text fontWeight="700" fontSize="sm" color={textColorBid}>
//                 Your Bid: {userBid}
//               </Text>
//             </Flex>
//           )}
//         </Flex>
//       </Flex>
//     </Card>
//   );
// }

//code for the server
import React, { useState } from "react";
import {
  AvatarGroup,
  Avatar,
  Box,
  Button,
  Flex,
  Icon,
  Image,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Card from "components/card/Card.js";
import axios from "axios"; // Import Axios for making HTTP requests
import { IoHeart, IoHeartOutline } from "react-icons/io5";

export default function NFT(props) {
  const { image, name, author, bidders, download, currentbid } = props;
  const [like, setLike] = useState(false);
  const [userBid, setUserBid] = useState("");
  const [bidPlaced, setBidPlaced] = useState(false);
  const [showContractSold, setShowContractSold] = useState(false); // State to show Contract Sold message
  const textColor = useColorModeValue("navy.700", "white");
  const textColorBid = useColorModeValue("brand.500", "white");

  const handleUserBidChange = (event) => {
    setUserBid(event.target.value);
  };

  const isUserBidLower = parseFloat(userBid) < parseFloat(currentbid);

  const handleUserBidSubmit = async (event) => {
    event.preventDefault();

    const data = {
      bidAmount: parseFloat(userBid),
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/api/place-bid",
        data
      );

      console.log(response.data.message);
      setBidPlaced(true);

      if (isUserBidLower) {
        setShowContractSold(true); // Show "Contract Sold" message
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Card p="20px">
      <Flex direction={{ base: "column" }} justify="center">
        <Box mb={{ base: "20px", "2xl": "20px" }} position="relative">
          <Image
            src={image}
            w={{ base: "100%", "3xl": "100%" }}
            h={{ base: "100%", "3xl": "100%" }}
            borderRadius="20px"
          />
          <Button
            position="absolute"
            bg="white"
            _hover={{ bg: "whiteAlpha.900" }}
            _active={{ bg: "white" }}
            _focus={{ bg: "white" }}
            p="0px !important"
            top="14px"
            right="14px"
            borderRadius="50%"
            minW="36px"
            h="36px"
            onClick={() => {
              setLike(!like);
            }}
          >
            <Icon
              transition="0.2s linear"
              w="20px"
              h="20px"
              as={like ? IoHeart : IoHeartOutline}
              color="brand.500"
            />
          </Button>
        </Box>
        <Flex flexDirection="column" justify="space-between" h="100%">
          <Flex
            justify="space between"
            direction={{
              base: "row",
              md: "column",
              lg: "row",
              xl: "column",
              "2xl": "row",
            }}
            mb="auto"
          >
            <Flex direction="column">
              <Text
                color={textColor}
                fontSize={{
                  base: "xl",
                  md: "lg",
                  lg: "lg",
                  xl: "lg",
                  "2xl": "md",
                  "3xl": "lg",
                }}
                mb="5px"
                fontWeight="bold"
                me="14px"
              >
                {name}
              </Text>
              <Text
                color="secondaryGray.600"
                fontSize={{
                  base: "sm",
                }}
                fontWeight="400"
                me="14px"
              >
                {author}
              </Text>
            </Flex>
            <AvatarGroup
              max={3}
              color={textColorBid}
              size="sm"
              mt={{
                base: "0px",
                md: "10px",
                lg: "0px",
                xl: "10px",
                "2xl": "0px",
              }}
              fontSize="12px"
            >
              {bidders.map((avt, key) => (
                <Avatar key={key} src={avt} />
              ))}
            </AvatarGroup>
          </Flex>
          <Flex
            align="start"
            justify="space-between"
            direction={{
              base: "row",
              md: "column",
              lg: "row",
              xl: "column",
              "2xl": "row",
            }}
            mt="25px"
          >
            <Text fontWeight="700" fontSize="sm" color={textColorBid}>
              Minimum Bid: {currentbid}
            </Text>
            <form onSubmit={handleUserBidSubmit}>
              <input
                type="text"
                placeholder="Your Bid Amount"
                style={{
                  border: "1px solid #ccc",
                  padding: "10px",
                  marginRight: "10px",
                }}
                onChange={handleUserBidChange}
                value={userBid}
              />
              <Link
                href={download}
                mt={{
                  base: "0px",
                  md: "10px",
                  lg: "0px",
                  xl: "10px",
                  "2xl": "0px",
                }}
              >
                {showContractSold ? (
                  <Text color="red">Contract Sold!!</Text>
                ) : (
                  <Button
                    type="submit"
                    variant="darkBrand"
                    color="white"
                    fontSize="sm"
                    fontWeight="500"
                    borderRadius="70px"
                    px="24px"
                    py="5px"
                  >
                    Place Bid
                  </Button>
                )}
              </Link>
            </form>
          </Flex>
          {isUserBidLower && (
            <Flex
              align="start"
              justify="space-between"
              direction={{
                base: "row",
                md: "column",
                lg: "row",
                xl: "column",
                "2xl": "row",
              }}
              mt="10px"
            >
              <Text fontWeight="700" fontSize="sm" color={textColorBid}>
                Your Bid: {userBid}
              </Text>
            </Flex>
          )}
        </Flex>
      </Flex>
    </Card>
  );
}
