import { useEffect, useState, useMemo } from "react";
import { getProductsByDepartment } from "../../api/admin/productApi";
import {
  BottomNavigation,
  BottomNavigationAction,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import CommonList from "./layout/CommonList";
import { useNavigate } from "react-router-dom";
import { getCookie } from "pages/user/cookieUtil";
import CheckroomOutlinedIcon from "@mui/icons-material/CheckroomOutlined";
import OtherHousesOutlinedIcon from "@mui/icons-material/OtherHousesOutlined";
import LaptopMacOutlinedIcon from "@mui/icons-material/LaptopMacOutlined";
import { useParams } from "react-router-dom";
const departments = {
  clothes: ["top", "bottom", "outer", "shoes", "inner"],
  life: ["interior", "kitchen", "beauty"],
  tech: ["tech"],
};

const AdminProducts = () => {
  const [main, setMain] = useState("clothes");
  const [sub, setSub] = useState("");
  const [products, setProducts] = useState([]);
  const params = useParams();
  const navigate = useNavigate();

  //상품 리스트 다운
  const fetchData = async () => {
    try {
      const data = await getProductsByDepartment(main, sub);
      const products = data.products;
      setProducts(products); // 상태 업데이트
      console.log(products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  useEffect(() => {
    const checkLoginAndFetchData = async () => {
      const userInfo = getCookie("user");

      if (!userInfo || !userInfo.accessToken) {
        alert("로그인이 필요한 서비스입니다.");
        navigate("/admin/login");
        return;
      }
      await fetchData();
    };
    checkLoginAndFetchData();
  }, [main, sub, navigate]);

  // useEffect(() => {}, [main, sub]);

  const changeMain = (event, newValue) => {
    setMain(newValue);
    setSub(""); // 새로운 main을 선택할 때 sub를 기본값으로 설정
  };

  const handleChange = (event) => {
    setSub(event.target.value);
  };

  const columns = [
    {
      field: "indexId",
      headerName: "ID",
      width: 90,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "productName",
      headerName: "상품명",
      width: 150,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "modelNum",
      headerName: "모델번호",
      width: 150,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "productBrand",
      headerName: "브랜드",
      width: 150,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "productSize",
      headerName: "사이즈",
      width: 150,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "mainDepartment",
      headerName: "대분류",
      width: 150,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "subDepartment",
      headerName: "소분류",
      width: 150,
      headerAlign: "center",
      align: "center",
    },
  ];

  // products 데이터를 rows 형식으로 변환
  const rows = products.map((product, index) => ({
    id: product.productId,
    indexId: index,
    productName: product.productName,
    modelNum: product.modelNum,
    productBrand: product.productBrand,
    productSize: product.productSize,
    mainDepartment: product.mainDepartment,
    subDepartment: product.subDepartment,
  }));

  //해당 row 의 모델 번호를 parameter로 AdminProductDetailed에 전달
  const handleRowClick = (row) => {
    alert("상품상세정보 페이지로 이동");
    navigate(`/admin/product/${row.modelNum}`);
    console.log(row.modelNum);
  };

  return (
    <div className="column-direction h100p">
      <BottomNavigation showLabels value={main} onChange={changeMain}>
        <BottomNavigationAction
          label="clothes"
          icon={<CheckroomOutlinedIcon />}
          value="clothes"
        />
        <BottomNavigationAction
          label="life"
          icon={<OtherHousesOutlinedIcon />}
          value="life"
        />
        <BottomNavigationAction
          label="tech"
          icon={<LaptopMacOutlinedIcon />}
          value="tech"
        />
      </BottomNavigation>
      <div className="flex-start ">
        <FormControl style={{ minWidth: 120 }}>
          <InputLabel id="demo-simple-select-label"></InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={sub}
            label="소분류"
            onChange={handleChange}
          >
            {/* <MenuItem key="default" value={main} disabled>
              {main}
            </MenuItem> */}
            {departments[main].map((sub) => (
              <MenuItem key={sub} value={sub}>
                {sub}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <CommonList columns={columns} rows={rows} onRowClick={handleRowClick} />
    </div>
  );
};

export default AdminProducts;
