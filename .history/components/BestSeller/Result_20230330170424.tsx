import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import SearchGroup from "./SearchGroup";
import SearchLimit from "./SearchLimit";
import Title from "./Title";

interface ResultProps {
  title: string;
}
const Result = ({ title }: ResultProps) => {
  return (
    <Box width={"74%"} maxWidth={"74%"}>
      <Title title="sản phẩm bán chạy" />
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <SearchGroup />
        <SearchLimit />
      </Stack>
      <Box mt={"25px"}></Box>
    </Box>
  );
};

export default Result;