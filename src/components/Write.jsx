import React from "react";
import { useForm, Controller } from "react-hook-form";
import { useWeb3ExecuteFunction } from "react-moralis";
import { Button, Input } from "antd";

const loreveerseAbi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"exists","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getBody","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getForkCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getOriginalTokenId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getTitle","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"metadata","type":"string"},{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"body","type":"string"},{"internalType":"uint256","name":"originalTokenId","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nextTokenId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}];
const loreverseAddress = "0x091d46c138cBa2E7e9E9508b184C087371d279EF";

const styles = {
  label: {
    fontSize: "20px",
    fontWeight: "500",
  }
}

function Write(props) {
  const { handleSubmit, control, formState: { errors }, reset } = useForm({
    defaultValues: {
      title: props?.title,
      body: props?.body
    }
  });

  const { data, error, fetch, isFetching } = useWeb3ExecuteFunction();

  const onSubmit = async (inputData) => {
    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300">
        <rect width="100%" height="100%" fill="#f2eecb"/>
        <foreignObject x="10" y="0" width="280" height="285">
          <div xmlns="http://www.w3.org/1999/xhtml" style="font-size:7pt;text-indent:1em">
            <p style="font-size:11pt;text-indent:0em">
              ${inputData.title}
            </p>
            <p>
              ${inputData.body}
            </p>
          </div>
        </foreignObject>
      </svg>`

    const encodedSvg = btoa(svg);
    const imageUri = `data:image/svg+xml;base64,${encodedSvg}`

    const baseMetadata = {
      name: inputData.title,
      description: "",
      title: inputData.title,
      body: inputData.body,
      referred_collection_1: "",
      referred_collection_1_name: "",
      referred_collection_2: "",
      referred_collection_2_name: "",
      image: imageUri
    };

    const jsonMetadata = JSON.stringify(baseMetadata);
    const encodedMetadata = btoa(jsonMetadata);
    const metadata = `data:application/json;base64,${encodedMetadata}`

    const options = {
      abi: loreveerseAbi,
      contractAddress: loreverseAddress,
      functionName: "mint",
      params: {
        metadata: metadata,
        title: inputData.title,
        body: inputData.body,
        originalTokenId: props?.tokenId ? props?.tokenId : 0,
      },
    }

    await fetch({ params: options })
    console.log(options.params.originalTokenId)
    if (data) {
      console.log(data)
    }
    if (error) {
      console.log(error)
    }
  
    reset({
      title: '',
      body: ''
    })
  };

  return (
    <div style={{ width: `${props?.width || "60vw"}`}}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ marginBottom: "20px"}}>
          <label style={styles.label}>Title</label>
          <Controller
            name="title"
            control={control}
            rules={{ required: true }}
            render={({ field }) => <Input {...field} placeholder="Title" />}
            style={{ padding: "10px" }}
          />
          {errors.title && <span style={{ color: "red" }}>Title is required</span>}
        </div>
        <div style={{ marginBottom: "20px"}}>
          <label style={styles.label}>Body</label>
          <Controller
            name="body"
            control={control}
            rules={{ required: true }}
            render={({ field }) => <Input.TextArea rows={10} {...field} placeholder="Body"  />}
          />
          {errors.body && <span style={{ color: "red" }}>Body is required</span>}
        </div>
        <Button
          type="primary"
          htmlType="submit"
          size="large"
          shape="round"
          loading={isFetching}
          disabled={isFetching}
          style={{ marginTop: "10px", fontWeight: 500 }}
        >
          {props?.buttonName || "Mint"}
        </Button>
      </form>
    </div>
  );
};

export default Write;
