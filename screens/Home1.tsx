// import * as React from "react";
import { useEffect } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import {
  FontSize,
  FontFamily,
  Color,
  Padding,
  StyleVariable,
  Border,
} from "../GlobalStyles";
import * as Notifications from "expo-notifications";

Notifications.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldPlaySound: false,
      shouldSetBadge: false,
      shouldShowAlert: true,
    };
  },
});

const Home1 = () => {
  useEffect(() => {
    const subscription1 = Notifications.addNotificationReceivedListener(
      (notification) => {
        console.log("NOTIFICATION RECEIVED");
        console.log(notification);
        const userName = notification.request.content.data.userName;
        console.log(userName);
      }
    );

    const subscription2 = Notifications.addNotificationResponseReceivedListener(
      (response) => {
        console.log("NOTIFICATION RESPONSE RECEIVED");
        console.log(response);
        const userName = response.notification.request.content.data.userName;
        console.log(userName);
      }
    );

    return () => {
      subscription1.remove();
      subscription2.remove();
    };
  }, []);

  function scheduleNotificationHandler() {
    Notifications.scheduleNotificationAsync({
      content: {
        title: "My first local notification",
        body: "This is the body of the notification.",
        data: { userName: "Max" },
      },
      trigger: {
        seconds: 5,
      },
    });
  }

  return (
    <View style={styles.home1}>
      <ScrollView
        style={styles.topBarParent}
        showsVerticalScrollIndicator={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.frameScrollViewContent}
      >
        <View style={styles.topBar}>
          <View style={styles.topBar1}>
            <View style={styles.leftContent}>
              <Image
                style={styles.icons}
                contentFit="cover"
                source={require("../assets/icons.png")}
              />
            </View>
            <Image
              style={styles.image1Icon}
              contentFit="cover"
              source={require("../assets/image-1.png")}
            />
          </View>
        </View>
        <View style={styles.accountOverview}>
          <ScrollView
            style={styles.accountSummary}
            horizontal={true}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={true}
            contentContainerStyle={styles.accountSummaryScrollViewContent}
          >
            <LinearGradient
              style={styles.walletBalance}
              locations={[0, 1]}
              colors={["#8547ed", "#e1b9ac"]}
            >
              <View style={styles.frameParent}>
                <View style={styles.totalWalletBalanceWrapper}>
                  <Text style={[styles.totalWalletBalance, styles.chuksLayout]}>
                    Total wallet balance
                  </Text>
                </View>
                <View style={styles.totalWalletBalanceWrapper}>
                  <Text style={[styles.n50000, styles.textTypo]}>N50,000</Text>
                  <Image
                    style={styles.icons1}
                    contentFit="cover"
                    source={require("../assets/icons1.png")}
                  />
                </View>
              </View>

              <TouchableOpacity onPress={scheduleNotificationHandler}>
                <View style={[styles.button, styles.buttonFlexBox]}>
                  <Text style={[styles.longButton, styles.youTypo]}>
                    Withdraw Balance
                  </Text>
                </View>
              </TouchableOpacity>

            </LinearGradient>
            <LinearGradient
              style={styles.promisesShadowBox}
              locations={[0, 1]}
              colors={["#8547ed", "#b0c5d0"]}
            >
              <View style={styles.cardName}>
                <Text style={[styles.promisesFromOthers1, styles.chuksLayout]}>
                  Promises from Others
                </Text>
                <Image
                  style={styles.promiseFromOthers1}
                  contentFit="cover"
                  source={require("../assets/promise-from-others-1.png")}
                />
              </View>
              <Image
                style={styles.promisesFromOthersChild}
                contentFit="cover"
                source={require("../assets/vector-10.png")}
              />
              <View style={styles.performance}>
                <View
                  style={[styles.receivedPromises, styles.promisesSpaceBlock]}
                >
                  <Text
                    style={[styles.receivedPromises1, styles.receivedLayout]}
                  >
                    Received promises
                  </Text>
                  <Text style={[styles.text, styles.textTypo]}>1,102</Text>
                </View>
                <View
                  style={[styles.fulfilledPromises, styles.promisesSpaceBlock]}
                >
                  <Text
                    style={[styles.receivedPromises1, styles.receivedLayout]}
                  >
                    Blessings
                  </Text>
                  <Text style={[styles.text, styles.textTypo]}>1000</Text>
                </View>
              </View>
            </LinearGradient>
            <LinearGradient
              style={styles.promisesShadowBox}
              locations={[0, 1]}
              colors={["#678ed8", "#7054e8"]}
            >
              <View style={styles.cardName}>
                <Text style={[styles.promisesFromOthers1, styles.chuksLayout]}>
                  Promises to Others
                </Text>
                <Image
                  style={styles.promiseToOthers1}
                  contentFit="cover"
                  source={require("../assets/promise-to-others-1.png")}
                />
              </View>
              <Image
                style={styles.promisesFromOthersChild}
                contentFit="cover"
                source={require("../assets/vector-10.png")}
              />
              <View style={styles.perfoemance}>
                <View style={[styles.promisesMade, styles.promisesSpaceBlock]}>
                  <Text
                    style={[styles.receivedPromises1, styles.receivedLayout]}
                  >
                    Promises made
                  </Text>
                  <Text style={[styles.text, styles.textTypo]}>100</Text>
                </View>
                <View
                  style={[styles.fulfilledPromises, styles.promisesSpaceBlock]}
                >
                  <Text
                    style={[styles.receivedPromises1, styles.receivedLayout]}
                  >
                    Giveaways
                  </Text>
                  <Text style={[styles.text, styles.textTypo]}>4</Text>
                </View>
              </View>
            </LinearGradient>
          </ScrollView>
          <View style={styles.navIndicator}>
            <Image
              style={styles.childLayout}
              contentFit="cover"
              source={require("../assets/ellipse-4.png")}
            />
            <Image
              style={[styles.navIndicatorItem, styles.childLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-5.png")}
            />
            <Image
              style={[styles.navIndicatorItem, styles.childLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-5.png")}
            />
          </View>
        </View>
        <View style={[styles.button1, styles.buttonFlexBox]}>
          <Text style={[styles.wetinYouWant, styles.youTypo]}>
            Wetin you want?
          </Text>
        </View>
        <View style={styles.trendingBlessings}>
          <Text style={[styles.trendingBlessings1, styles.viewAllLayout]}>
            Trending blessings
          </Text>
          <View style={[styles.trendingCards, styles.blessings1SpaceBlock]}>
            <View style={styles.trendingPromiseCards}>
              <View style={[styles.ellipseParent, styles.parentFlexBox]}>
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require("../assets/ellipse-461.png")}
                />
                <View style={styles.chuksParent}>
                  <Text style={[styles.chuks, styles.chuksTypo]}>@chuks</Text>
                  <Text style={[styles.mFollowers, styles.mFollowersClr]}>
                    5M Followers
                  </Text>
                  <View style={styles.component2}>
                    <Text style={[styles.champion, styles.championTypo]}>
                      Champion
                    </Text>
                    <Image
                      style={styles.component2Child}
                      contentFit="cover"
                      source={require("../assets/star-2.png")}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.frameGroup}>
                <View style={styles.carMoveWrapper}>
                  <Text style={[styles.chuks, styles.chuksTypo]}>Car Move</Text>
                </View>
                <View
                  style={[styles.amountReceivedParent, styles.parentFlexBox]}
                >
                  <Text style={[styles.amountReceived, styles.mFollowersClr]}>
                    Amount Received
                  </Text>
                  <Text style={[styles.n10000000, styles.chuksTypo]}>
                    N10,000,000
                  </Text>
                </View>
                <View
                  style={[styles.amountReceivedParent, styles.parentFlexBox]}
                >
                  <Text style={[styles.amountReceived, styles.mFollowersClr]}>
                    Received Promises
                  </Text>
                  <Text style={[styles.n10000000, styles.chuksTypo]}>
                    1,000
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.navIndicator}>
              <Image
                style={styles.childLayout}
                contentFit="cover"
                source={require("../assets/ellipse-4.png")}
              />
              <Image
                style={[styles.navIndicatorItem, styles.childLayout]}
                contentFit="cover"
                source={require("../assets/ellipse-5.png")}
              />
              <Image
                style={[styles.navIndicatorItem, styles.childLayout]}
                contentFit="cover"
                source={require("../assets/ellipse-5.png")}
              />
            </View>
          </View>
        </View>



        
          <View 
          
          style={styles.frameContainer}>
            <View
              style={[styles.recentBlessingsParent, styles.component4FlexBox]}
            >
              <Text style={[styles.trendingBlessings1, styles.viewAllLayout]}>
                Recent Blessings
              </Text>
              <Text style={[styles.viewAll, styles.chuksTypo]}>View all</Text>
            </View>


            {/* SCROLL START */}
            {/* <View
              // style={[styles.blessings1, styles.blessings1SpaceBlock]}
              // showsVerticalScrollIndicator={true}
              // showsHorizontalScrollIndicator={false}
              // contentContainerStyle={styles.blessingsScrollViewContent}
            > */}

              <View style={styles.blessingsBorder}>
                <View style={styles.rectangleParent}>
                  <Image
                    style={[styles.frameItem, styles.frameItemLayout]}
                    contentFit="cover"
                    source={require("../assets/rectangle-56261.png")}
                  />
                  <View style={styles.performance}>
                    <Text style={[styles.blessingsDonDrop, styles.mFollowersClr]}>
                      Blessings don drop!
                    </Text>
                    <Text style={[styles.davidoSentYou, styles.receivedLayout]}>
                      @davido sent you N50,000
                    </Text>
                  </View>
                </View>
                <View style={styles.fulfilledParent}>
                  <Text style={[styles.pending, styles.receivedLayout]}>
                    Pending
                  </Text>
                  <Text style={[styles.minsAgo, styles.receivedLayout]}>
                    2mins ago
                  </Text>
                </View>
              </View>
              <View style={styles.blessingsBorder}>
                <View style={styles.rectangleParent}>
                  <Image
                    style={[styles.frameItem, styles.frameItemLayout]}
                    contentFit="cover"
                    source={require("../assets/rectangle-56261.png")}
                  />
                  <View style={styles.performance}>
                    <Text style={[styles.blessingsDonDrop, styles.mFollowersClr]}>
                      Blessings don drop!
                    </Text>
                    <Text style={[styles.davidoSentYou, styles.receivedLayout]}>
                      @davido sent you N50,000
                    </Text>
                  </View>
                </View>
                <View style={styles.fulfilledParent}>
                  <Text style={[styles.pending, styles.receivedLayout]}>
                    Pending
                  </Text>
                  <Text style={[styles.minsAgo, styles.receivedLayout]}>
                    2mins ago
                  </Text>
                </View>
              </View>
              <View style={styles.blessingsBorder}>
                <View style={styles.rectangleParent}>
                  <Image
                    style={[styles.frameItem, styles.frameItemLayout]}
                    contentFit="cover"
                    source={require("../assets/rectangle-56261.png")}
                  />
                  <View style={styles.performance}>
                    <Text style={[styles.blessingsDonDrop, styles.mFollowersClr]}>
                      Blessings don drop!
                    </Text>
                    <Text style={[styles.davidoSentYou, styles.receivedLayout]}>
                      @davido sent you N50,000
                    </Text>
                  </View>
                </View>
                <View style={styles.fulfilledParent}>
                  <Text style={[styles.pending, styles.receivedLayout]}>
                    Pending
                  </Text>
                  <Text style={[styles.minsAgo, styles.receivedLayout]}>
                    2mins ago
                  </Text>
                </View>
              </View>
              <View style={styles.blessingsBorder}>
                <View style={styles.rectangleParent}>
                  <Image
                    style={[styles.frameItem, styles.frameItemLayout]}
                    contentFit="cover"
                    source={require("../assets/rectangle-56261.png")}
                  />
                  <View style={styles.performance}>
                    <Text style={[styles.blessingsDonDrop, styles.mFollowersClr]}>
                      Blessings don drop!
                    </Text>
                    <Text style={[styles.davidoSentYou, styles.receivedLayout]}>
                      @davido sent you N50,000
                    </Text>
                  </View>
                </View>
                <View style={styles.fulfilledParent}>
                  <Text style={[styles.pending, styles.receivedLayout]}>
                    Pending
                  </Text>
                  <Text style={[styles.minsAgo, styles.receivedLayout]}>
                    2mins ago
                  </Text>
                </View>
              </View>



              <View style={[styles.blessings3, styles.blessingsBorder]}>
                <View style={styles.rectangleParent}>
                  <Image
                    style={[styles.frameItem, styles.frameItemLayout]}
                    contentFit="cover"
                    source={require("../assets/rectangle-5626.png")}
                  />
                  <View style={styles.performance}>
                    <Text style={[styles.blessingsDonDrop, styles.mFollowersClr]}>
                      Blessings don drop!
                    </Text>
                    <Text style={[styles.davidoSentYou, styles.receivedLayout]}>
                      @davido sent you N50,000
                    </Text>
                  </View>
                </View>
                <View style={styles.fulfilledParent}>
                  <Text style={[styles.fulfilled, styles.receivedLayout]}>
                    Fulfilled
                  </Text>
                  <Text style={[styles.minsAgo, styles.receivedLayout]}>
                    2mins ago
                  </Text>
                </View>
              </View>
              <View style={[styles.blessings3, styles.blessingsBorder]}>
                <View style={styles.rectangleParent}>
                  <Image
                    style={[styles.frameItem, styles.frameItemLayout]}
                    contentFit="cover"
                    source={require("../assets/rectangle-5626.png")}
                  />
                  <View style={styles.performance}>
                    <Text style={[styles.blessingsDonDrop, styles.mFollowersClr]}>
                      Blessings don drop!
                    </Text>
                    <Text style={[styles.davidoSentYou, styles.receivedLayout]}>
                      @davido sent you N50,000
                    </Text>
                  </View>
                </View>
                <View style={styles.fulfilledParent}>
                  <Text style={[styles.fulfilled, styles.receivedLayout]}>
                    Fulfilled
                  </Text>
                  <Text style={[styles.minsAgo, styles.receivedLayout]}>
                    2mins ago
                  </Text>
                </View>
              </View>
              <View style={[styles.blessings3, styles.blessingsBorder]}>
                <View style={styles.rectangleParent}>
                  <Image
                    style={[styles.frameItem, styles.frameItemLayout]}
                    contentFit="cover"
                    source={require("../assets/rectangle-5626.png")}
                  />
                  <View style={styles.performance}>
                    <Text style={[styles.blessingsDonDrop, styles.mFollowersClr]}>
                      Blessings don drop!
                    </Text>
                    <Text style={[styles.davidoSentYou, styles.receivedLayout]}>
                      @davido sent you N50,000
                    </Text>
                  </View>
                </View>
                <View style={styles.fulfilledParent}>
                  <Text style={[styles.fulfilled, styles.receivedLayout]}>
                    Fulfilled
                  </Text>
                  <Text style={[styles.minsAgo, styles.receivedLayout]}>
                    2mins ago
                  </Text>
                </View>
              </View>
              <View style={[styles.blessings3, styles.blessingsBorder]}>
                <View style={styles.rectangleParent}>
                  <Image
                    style={[styles.frameItem, styles.frameItemLayout]}
                    contentFit="cover"
                    source={require("../assets/rectangle-5626.png")}
                  />
                  <View style={styles.performance}>
                    <Text style={[styles.blessingsDonDrop, styles.mFollowersClr]}>
                      Blessings don drop!
                    </Text>
                    <Text style={[styles.davidoSentYou, styles.receivedLayout]}>
                      @davido sent you N50,000
                    </Text>
                  </View>
                </View>
                <View style={styles.fulfilledParent}>
                  <Text style={[styles.fulfilled, styles.receivedLayout]}>
                    Fulfilled
                  </Text>
                  <Text style={[styles.minsAgo, styles.receivedLayout]}>
                    2mins ago
                  </Text>
                </View>
              </View>
              <View style={[styles.blessings3, styles.blessingsBorder]}>
                <View style={styles.totalWalletBalanceWrapper}>
                  <Image
                    style={[styles.rectangleIcon, styles.frameItemLayout]}
                    contentFit="cover"
                    source={require("../assets/rectangle-56261.png")}
                  />
                  <View style={styles.performance}>
                    <Text style={[styles.blessingsDonDrop, styles.mFollowersClr]}>
                      Blessings don drop!
                    </Text>
                    <Text style={[styles.davidoSentYou, styles.receivedLayout]}>
                      @havy promised you N10,000
                    </Text>
                  </View>
                </View>
                <View style={styles.fulfilledParent}>
                  <Text style={[styles.pending, styles.receivedLayout]}>
                    Pending
                  </Text>
                  <Text style={[styles.minsAgo, styles.receivedLayout]}>
                    2mins ago
                  </Text>
                </View>
              </View>












              {/* <View style={[styles.blessings3, styles.blessingsBorder]}>
                <View style={styles.totalWalletBalanceWrapper}>
                  <Image
                    style={[styles.rectangleIcon, styles.frameItemLayout]}
                    contentFit="cover"
                    source={require("../assets/rectangle-56261.png")}
                  />
                  <View style={styles.performance}>
                    <Text style={[styles.blessingsDonDrop, styles.mFollowersClr]}>
                      Blessings don drop!
                    </Text>
                    <Text style={[styles.davidoSentYou, styles.receivedLayout]}>
                      @havy promised you N10,000
                    </Text>
                  </View>
                </View>
                <View style={styles.fulfilledParent}>
                  <Text style={[styles.pending, styles.receivedLayout]}>
                    Pending
                  </Text>
                  <Text style={[styles.minsAgo, styles.receivedLayout]}>
                    2mins ago
                  </Text>
                </View>
              </View>
              <View style={[styles.blessings3, styles.blessingsBorder]}>
                <View style={styles.totalWalletBalanceWrapper}>
                  <Image
                    style={[styles.rectangleIcon, styles.frameItemLayout]}
                    contentFit="cover"
                    source={require("../assets/rectangle-56261.png")}
                  />
                  <View style={styles.performance}>
                    <Text style={[styles.blessingsDonDrop, styles.mFollowersClr]}>
                      Blessings don drop!
                    </Text>
                    <Text style={[styles.davidoSentYou, styles.receivedLayout]}>
                      @havy promised you N10,000
                    </Text>
                  </View>
                </View>
                <View style={styles.fulfilledParent}>
                  <Text style={[styles.pending, styles.receivedLayout]}>
                    Pending
                  </Text>
                  <Text style={[styles.minsAgo, styles.receivedLayout]}>
                    2mins ago
                  </Text>
                </View>
              </View>
              <View style={[styles.blessings3, styles.blessingsBorder]}>
                <View style={styles.totalWalletBalanceWrapper}>
                  <Image
                    style={[styles.rectangleIcon, styles.frameItemLayout]}
                    contentFit="cover"
                    source={require("../assets/rectangle-56261.png")}
                  />
                  <View style={styles.performance}>
                    <Text style={[styles.blessingsDonDrop, styles.mFollowersClr]}>
                      Blessings don drop!
                    </Text>
                    <Text style={[styles.davidoSentYou, styles.receivedLayout]}>
                      @havy promised you N10,000
                    </Text>
                  </View>
                </View>
                <View style={styles.fulfilledParent}>
                  <Text style={[styles.pending, styles.receivedLayout]}>
                    Pending
                  </Text>
                  <Text style={[styles.minsAgo, styles.receivedLayout]}>
                    2mins ago
                  </Text>
                </View>
              </View> */}





            {/* SCROLL END */}





          </View>
        





      </ScrollView>

      <View style={[styles.component4, styles.component4FlexBox]}>
        <View style={styles.home}>
          <Image
            style={styles.icons}
            contentFit="cover"
            source={require("../assets/nav-icons--2.png")}
          />
          <Image
            style={[styles.homeChild, styles.childLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-462.png")}
          />
        </View>
        <Image
          style={styles.icons}
          contentFit="cover"
          source={require("../assets/nav-icons--21.png")}
        />
        <Image
          style={styles.icons}
          contentFit="cover"
          source={require("../assets/nav-icons--22.png")}
        />
      </View>


      
    </View>
  );
};

const styles = StyleSheet.create({
  accountSummaryScrollViewContent: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  blessingsScrollViewContent: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameScrollViewContent: {
    flexDirection: "column",
    paddingHorizontal: 20,
    paddingVertical: 0,
    alignItems: "flex-end",
    justifyContent: "flex-start",
  },
  chuksLayout: {
    lineHeight: 21,
    fontSize: FontSize.bodySmallRegular_size,
  },
  textTypo: {
    fontFamily: FontFamily.h4Bold,
    fontWeight: "700",
    textAlign: "center",
    color: Color.appColorsIconsPrimary,
  },
  buttonFlexBox: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_13xl,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: 56,
  },
  youTypo: {
    fontFamily: FontFamily.tagMedium,
    fontWeight: "500",
  },
  promisesSpaceBlock: {
    padding: StyleVariable.spacingSystemSpacing8,
    borderRadius: StyleVariable.cornerRadiusCornerRadius8,
  },
  receivedLayout: {
    lineHeight: 18,
    fontSize: FontSize.tagRegular_size,
  },
  childLayout: {
    height: 8,
    width: 8,
  },
  viewAllLayout: {
    lineHeight: 24,
    fontSize: FontSize.bodyRegular_size,
  },
  blessings1SpaceBlock: {
    marginTop: 16,
    alignSelf: "stretch",
  },
  parentFlexBox: {
    backgroundColor: Color.appColorsStrokeColorsNormal,
    justifyContent: "center",
    alignSelf: "stretch",
  },
  chuksTypo: {
    fontFamily: FontFamily.bodySemibold,
    fontWeight: "600",
    color: Color.appColorsIconsPrimary,
  },
  mFollowersClr: {
    color: Color.appColorsTextTertiary,
    textAlign: "center",
  },
  championTypo: {
    lineHeight: 14,
    fontSize: FontSize.tinyRegular_size,
    fontFamily: FontFamily.tagRegular,
  },
  component4FlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  frameItemLayout: {
    height: 48,
    width: 40,
  },
  blessingsBorder: {
    padding: StyleVariable.spacingSystemSpacing12,
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: Color.appColorsStrokeColorsNormal,
    borderStyle: "solid",
    backgroundColor: Color.appColorsBackgroundSecondary,
    borderRadius: StyleVariable.cornerRadiusCornerRadius8,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  icons: {
    width: 24,
    height: 24,
  },
  leftContent: {
    paddingHorizontal: 19,
    paddingVertical: Padding.p_base,
    display: "none",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
    flex: 1,
  },
  image1Icon: {
    width: 32,
    height: 32,
  },
  topBar1: {
    width: 375,
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: 0,
    alignItems: "center",
    flexDirection: "row",
    height: 56,
    overflow: "hidden",
    backgroundColor: Color.appColorsBackgroundPrimary,
  },
  topBar: {
    width: 362,
  },
  totalWalletBalance: {
    textAlign: "center",
    color: Color.appColorsIconsPrimary,
    fontFamily: FontFamily.tagRegular,
  },
  totalWalletBalanceWrapper: {
    alignItems: "center",
    flexDirection: "row",
  },
  n50000: {
    fontSize: FontSize.h2Bold_size,
    lineHeight: 54,
    width: 155,
    height: 52,
  },
  icons1: {
    width: 20,
    height: 20,
    marginLeft: 8,
    overflow: "hidden",
  },
  frameParent: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
  },
  longButton: {
    color: Color.appColorsBackgroundPrimary,
    textAlign: "left",
    lineHeight: 24,
    fontSize: FontSize.bodyRegular_size,
  },
  button: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.appColorsIconsPrimary,
    marginTop: 8,
  },
  walletBalance: {
    backgroundColor: "transparent",
    paddingVertical: StyleVariable.spacingSystemSpacing24,
    paddingHorizontal: StyleVariable.spacingSystemSpacing16,
    width: 327,
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "#d7b0ff",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 9,
    },
    borderRadius: StyleVariable.cornerRadiusCornerRadius16,
    alignItems: "center",
    overflow: "hidden",
  },
  promisesFromOthers1: {
    textAlign: "left",
    color: Color.appColorsIconsPrimary,
    fontFamily: FontFamily.tagRegular,
  },
  promiseFromOthers1: {
    width: 136,
    height: 112,
    overflow: "hidden",
  },
  cardName: {
    justifyContent: "center",
  },
  promisesFromOthersChild: {
    maxHeight: "100%",
    width: 0,
    marginLeft: 8,
    alignSelf: "stretch",
  },
  receivedPromises1: {
    fontFamily: FontFamily.tagMedium,
    fontWeight: "500",
    textAlign: "center",
    color: Color.appColorsIconsPrimary,
  },
  text: {
    fontSize: FontSize.h4Bold_size,
    lineHeight: 36,
  },
  receivedPromises: {
    backgroundColor: Color.colorLavender,
    padding: StyleVariable.spacingSystemSpacing8,
    justifyContent: "center",
  },
  fulfilledPromises: {
    backgroundColor: Color.colorGray_100,
    marginTop: 8,
    justifyContent: "center",
    alignSelf: "stretch",
  },
  performance: {
    marginLeft: 8,
    justifyContent: "center",
  },
  promisesShadowBox: {
    marginLeft: 16,
    height: 190,
    backgroundColor: "transparent",
    paddingVertical: StyleVariable.spacingSystemSpacing24,
    paddingHorizontal: StyleVariable.spacingSystemSpacing16,
    width: 327,
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowColor: "#d7b0ff",
    borderRadius: StyleVariable.cornerRadiusCornerRadius16,
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  promiseToOthers1: {
    width: 118,
    height: 113,
    overflow: "hidden",
  },
  promisesMade: {
    backgroundColor: Color.colorLavender,
    padding: StyleVariable.spacingSystemSpacing8,
    justifyContent: "center",
    alignSelf: "stretch",
  },
  perfoemance: {
    marginLeft: 8,
    justifyContent: "center",
    flex: 1,
  },
  accountSummary: {
    alignSelf: "stretch",
    width: "100%",
  },
  navIndicatorItem: {
    marginLeft: 8,
  },
  navIndicator: {
    marginTop: 20,
    flexDirection: "row",
  },
  accountOverview: {
    width: 336,
    marginTop: 26,
    alignItems: "center",
  },
  wetinYouWant: {
    textAlign: "left",
    lineHeight: 24,
    fontSize: FontSize.bodyRegular_size,
    color: Color.appColorsIconsPrimary,
  },
  button1: {
    borderRadius: StyleVariable.cornerRadiusCornerRadius48,
    backgroundColor: Color.appColorsButtonsBackgroundPrimary,
    shadowColor: "rgba(127, 0, 255, 0.1)",
    shadowRadius: 186,
    elevation: 186,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 9,
    },
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_13xl,
    marginTop: 26,
    alignSelf: "stretch",
  },
  trendingBlessings1: {
    textAlign: "left",
    color: Color.appColorsIconsPrimary,
    fontFamily: FontFamily.tagRegular,
  },
  frameChild: {
    width: 78,
    height: 78,
  },
  chuks: {
    textAlign: "center",
    lineHeight: 21,
    fontSize: FontSize.bodySmallRegular_size,
  },
  mFollowers: {
    marginTop: 4,
    lineHeight: 14,
    fontSize: FontSize.tinyRegular_size,
    fontFamily: FontFamily.tagRegular,
  },
  champion: {
    textAlign: "left",
    color: Color.appColorsIconsPrimary,
  },
  component2Child: {
    width: 12,
    height: 11,
    marginLeft: 4,
  },
  component2: {
    marginTop: 4,
    alignItems: "center",
    flexDirection: "row",
  },
  chuksParent: {
    marginTop: 8,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
  },
  ellipseParent: {
    width: 106,
    paddingHorizontal: StyleVariable.spacingSystemSpacing12,
    paddingVertical: StyleVariable.spacingSystemSpacing8,
    borderRadius: StyleVariable.cornerRadiusCornerRadius16,
    backgroundColor: Color.appColorsStrokeColorsNormal,
    alignItems: "center",
  },
  carMoveWrapper: {
    alignSelf: "stretch",
  },
  amountReceived: {
    lineHeight: 18,
    fontSize: FontSize.tagRegular_size,
    fontFamily: FontFamily.tagMedium,
    fontWeight: "500",
  },
  n10000000: {
    marginTop: 4,
    lineHeight: 24,
    fontSize: FontSize.bodyRegular_size,
    textAlign: "center",
  },
  amountReceivedParent: {
    padding: StyleVariable.spacingSystemSpacing8,
    borderRadius: StyleVariable.cornerRadiusCornerRadius8,
    marginTop: 8,
    flex: 1,
  },
  frameGroup: {
    marginLeft: 8,
    alignSelf: "stretch",
    flex: 1,
  },
  trendingPromiseCards: {
    padding: StyleVariable.spacingSystemSpacing16,
    borderWidth: 1,
    backgroundColor: Color.appColorsBackgroundSecondary,
    borderColor: Color.appColorsStrokeColorsNormal,
    borderStyle: "solid",
    borderRadius: StyleVariable.cornerRadiusCornerRadius16,
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  trendingCards: {
    alignItems: "center",
  },
  trendingBlessings: {
    marginTop: 26,
    alignSelf: "stretch",
  },
  viewAll: {
    textAlign: "left",
    lineHeight: 24,
    fontSize: FontSize.bodyRegular_size,
  },
  recentBlessingsParent: {
    alignItems: "center",
    alignSelf: "stretch",
  },
  frameItem: {
    borderRadius: StyleVariable.cornerRadiusCornerRadius8,
    height: 48,
    width: 40,
  },
  blessingsDonDrop: {
    lineHeight: 18,
    fontSize: FontSize.tagRegular_size,
    fontFamily: FontFamily.tagRegular,
  },
  davidoSentYou: {
    fontFamily: FontFamily.tagMedium,
    fontWeight: "500",
    marginTop: 8,
    textAlign: "center",
    color: Color.appColorsIconsPrimary,
  },
  rectangleParent: {
    flexDirection: "row",
  },
  fulfilled: {
    color: Color.appColorsSuccessPrimary,
    textAlign: "center",
    fontFamily: FontFamily.tagRegular,
  },
  minsAgo: {
    marginTop: 8,
    textAlign: "center",
    color: Color.appColorsIconsPrimary,
    fontFamily: FontFamily.tagRegular,
  },
  fulfilledParent: {
    width: 108,
    alignItems: "flex-end",
  },
  blessings3: {
    marginTop: 12,
  },
  rectangleIcon: {
    borderRadius: Border.br_5xs,
  },
  pending: {
    color: Color.appColorsWarningPrimary,
    textAlign: "center",
    fontFamily: FontFamily.tagRegular,
  },
  blessings1: {
    flex: 1,
  },
  frameContainer: {
    // height: 190,
    marginTop: 26,
    alignSelf: "stretch",
  },
  topBarParent: {
    zIndex: 0,
    alignSelf: "stretch",
    flex: 1,
  },
  homeChild: {
    marginTop: 4,
  },
  home: {
    justifyContent: "center",
    alignItems: "center",
  },
  component4: {
    position: "absolute",
    bottom: 0,
    left: 0,
    borderTopWidth: 1,
    width: 378,
    height: 80,
    padding: Padding.p_5xl,
    zIndex: 1,
    borderColor: Color.appColorsStrokeColorsNormal,
    borderStyle: "solid",
    justifyContent: "space-between",
    backgroundColor: Color.appColorsBackgroundPrimary,
  },
  home1: {
    height: 1000,
    alignItems: "flex-end",
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.appColorsBackgroundPrimary,
  },
});

export default Home1;
