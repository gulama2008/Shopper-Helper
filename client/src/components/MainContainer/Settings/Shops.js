import { PlusOutlined } from "@ant-design/icons";
import { Input, Space, Tag, Tooltip, theme,Button,message } from "antd";
import { useEffect, useRef, useState } from "react";
import Auth from "../../../utils/auth";
import { useMutation } from "@apollo/client";
import { UPDATE_SHOPS } from "../../../utils/mutations";
const Shops = (props) => {
  const { userShops, refetch } = props;
const [UpdateShops, { error, data }] = useMutation(UPDATE_SHOPS);
  const { token } = theme.useToken();
  const [tags, setTags] = useState(userShops);
  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [editInputIndex, setEditInputIndex] = useState(-1);
  const [editInputValue, setEditInputValue] = useState("");
  const inputRef = useRef(null);
  const editInputRef = useRef(null);

  useEffect(() => {
    if (inputVisible) {
      inputRef.current?.focus();
    }
  }, [inputVisible]);

  useEffect(() => {
    editInputRef.current?.focus();
  }, [inputValue]);
  const handleClose = (removedTag) => {
    const newTags = tags.filter((tag) => tag !== removedTag);
    console.log(newTags);
    setTags(newTags);
  };

  const showInput = () => {
    setInputVisible(true);
  };
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleInputConfirm = () => {
    if (inputValue && tags.indexOf(inputValue) === -1) {
      setTags([...tags, inputValue.toLocaleLowerCase()]);
    }
    setInputVisible(false);
    setInputValue("");
  };
  const handleEditInputChange = (e) => {
    setEditInputValue(e.target.value);
  };
  const handleEditInputConfirm = () => {
    const newTags = [...tags];
    newTags[editInputIndex] = editInputValue;
    setTags(newTags);
    setEditInputIndex(-1);
    setInputValue("");
  };
  const tagInputStyle = {
    width: 78,
    verticalAlign: "top",
  };
  const tagPlusStyle = {
    background: token.colorBgContainer,
    borderStyle: "dashed",
    height: "30px",
    lineHeight: "25px",
  };

  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: "success",
      content: "Update saved!",
    });
  };

  const handleSaveChanges = async(e) => { 
     e.preventDefault();
        const username = Auth.getProfile().data.username;
    try {
          console.log(tags);
      const { data } = await UpdateShops({
        variables: {
          username: username,
          shops: tags,
        },
      });
      success();
      refetch();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Space size={[0, 8]} wrap>
      {contextHolder}
      <Space size={[0, 8]} wrap>
        {tags.map((tag, index) => {
          if (editInputIndex === index) {
            return (
              <Input
                ref={editInputRef}
                key={tag}
                size="small"
                style={tagInputStyle}
                value={editInputValue}
                onChange={handleEditInputChange}
                onBlur={handleEditInputConfirm}
                onPressEnter={handleEditInputConfirm}
              />
            );
          }
          const isLongTag = tag.length > 20;
          const tagElem = (
            <Tag
              key={tag}
              closable="true"
              style={{
                userSelect: "none",
                height: "30px",
                lineHeight:"25px"
              }}
              onClose={() => handleClose(tag)}
            >
              <span
                onDoubleClick={(e) => {
                  if (index !== 0) {
                    setEditInputIndex(index);
                    setEditInputValue(tag);
                    e.preventDefault();
                  }
                }}
              >
                {isLongTag ? `${tag.slice(0, 20)}...` : tag}
              </span>
            </Tag>
          );
          return isLongTag ? (
            <Tooltip title={tag} key={tag}>
              {tagElem}
            </Tooltip>
          ) : (
            tagElem
          );
        })}
      </Space>
      {inputVisible ? (
        <Input
          ref={inputRef}
          type="text"
          size="small"
          style={tagInputStyle}
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputConfirm}
          onPressEnter={handleInputConfirm}
        />
      ) : (
        <Tag style={tagPlusStyle} onClick={showInput} className="shoptag">
          <PlusOutlined /> New Shop
        </Tag>
      )}
      <Button className="button" onClick={handleSaveChanges}>Save Changes</Button>
    </Space>
  );
};
export default Shops;
