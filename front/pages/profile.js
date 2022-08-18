import React from "react";
import { useSelector } from "react-redux";
import AppLayout from "../components/AppLayout";
import FollowList from "../components/FollowList";
import NicknameEditForm from "../components/NicknameEditForm";

const Profile = () => {
  const {me} = useSelector((state)=>state.user)
  return (
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="팔로잉" data={me.followingList} />
        <FollowList header="팔로워" data={me.followerList} />
      </AppLayout>
  );
};
export default Profile;
