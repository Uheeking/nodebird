import React from "react";
import AppLayout from "../components/AppLayout";
import FollowList from "../components/FollowList";
import NicknameEditForm from "../components/NicknameEditForm";

const Profile = () => {
  const followerList = [
    { nickname: "유희왕" },
    { nickname: "유희왕개씹존잘" },
    { nickname: "아임노드" },
  ];
  const followingList = [
    { nickname: "유희왕" },
    { nickname: "유희왕개씹존잘" },
    { nickname: "아임노드" },
  ];
  return (
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="팔로잉 목록" data={followingList} />
        <FollowList header="팔로워 목록" data={followerList} />
      </AppLayout>
  );
};
export default Profile;
