import { StyleSheet, StatusBar } from 'react-native';

const variables = {
    account: {
        avatar: {
            size: 57.5,
            borderSize: 5,
            notificationSize: 7.5
        }
    },
    shortcuts: {
        size: 65,
        btnMargin: 10,
        btnPadding: 15,
        btnContentMargin: 5
    },
    wallets: {
        topic: {
            appendHeight: 22.5
        },
        display: {
            walletHeight: 65,
            walletMargin: 10,
            walletContentMargin: 1
        }
    }
}

export default StyleSheet.create({
    application: {
        flex: 1,
        paddingTop: StatusBar.currentHeight + 30,
        paddingLeft: 20,
        paddingRight: 20
    },
    account: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",   
    },
    accountWallet: {
        flexDirection: "column"
    },
    accountWalletCash: {
        flexDirection: "row"
    },
    accountWalletCashSymbol: {
        color: "#4371FB",
        fontSize: 30
    },
    accountWalletCashNumber: {
        color: "white",
        fontSize: 30,
        marginLeft: 5
    },
    accountWalletTitle: {
        color: "rgba(255, 255, 255, .5)",
        fontSize: 12
    },
    accountAvatar: {
        height: variables.account.avatar.size,
        width: variables.account.avatar.size
        
    },
    accountAvatarMat: {
        height: variables.account.avatar.size,
        width: variables.account.avatar.size,
        borderRadius: variables.account.avatar.size / 2, // 100% / 50% = 2
    },
    accountAvatarMatImage: {
        height: variables.account.avatar.size - variables.account.avatar.borderSize,
        width: variables.account.avatar.size - variables.account.avatar.borderSize,
        borderRadius: variables.account.avatar.size / 2,
        resizeMode: "cover",
        marginTop: variables.account.avatar.borderSize / 2,
        marginLeft: variables.account.avatar.borderSize / 2
    },
    accountAvatarNotification: {
        height: variables.account.avatar.notificationSize,
        width: variables.account.avatar.notificationSize,
        borderRadius: variables.account.avatar.notificationSize / 2,
        backgroundColor: "#EB58BF",
        position: "absolute",
        top: -variables.account.avatar.notificationSize / 2,
        right: -variables.account.avatar.notificationSize / 2
    },
    title: {
        fontSize: 32,
        color: "rgba(255, 255, 255, .85)",
        marginTop: 70
    },
    titleMark: {
        color: "#6BEDCD"
    },
    shortcuts: {
        marginTop: 75,
        height: variables.shortcuts.size,
        flexDirection: "row",
        borderRadius: 15
    },
    shortcutsTransition: {
        position: "absolute",
        right: 0,
        top: 0,
        height: variables.shortcuts.size,
        width: '50%',
        zIndex: 5
    },
    shortcutsView: {
        flex: 1
    },
    shortcutsViewBtn: {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        borderRadius: 10,
        height: variables.shortcuts.size,
        width: variables.shortcuts.size,
        marginLeft: variables.shortcuts.btnMargin,
        marginRight: variables.shortcuts.btnMargin
    },
    shortcutsViewBtnspecial: {
        width: "auto",
        paddingLeft: 15,
        paddingRight: 15
    },
    shortcutsViewBtnImage: {
        height: 12.5,
        width: 12.5,
        opacity: .8,
        marginRight: variables.shortcuts.btnContentMargin
    },
    shortcutsViewBtnTitle: {
        color: "white",
        marginLeft: variables.shortcuts.btnContentMargin
    },
    wallets: {
        flexDirection: "column",
        marginTop: 50
    },
    walletsTopic: {
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        marginBottom: 15
    },
    walletsTopicTitle: {
        fontSize: 18,
        color: "white"
    },
    walletsTopicAppend: {
        color: "white",
        fontSize: 14,
        height: variables.wallets.topic.appendHeight,
        width: variables.wallets.topic.appendHeight,
        borderColor: "rgba(255, 255, 255, .25)",
        borderWidth: 1,
        borderRadius: variables.wallets.topic.appendHeight / 2,
        textAlign: "center"
    },
    walletsDisplay: {
        flexDirection: "column"
    },
    walletsDisplayWallet: {
        height: variables.wallets.display.walletHeight,
        width: '100%',
        borderRadius: 5,
        marginTop: variables.wallets.display.walletMargin,
        marginBottom: variables.wallets.display.walletMargin,
        flexDirection: "row",
        alignItems: "center"
    },
    walletsDisplayWalletImage: {
        width: "20%",
        height: variables.wallets.display.walletHeight,
        alignItems: "center",
        justifyContent: "center"
    },
    walletsDisplayWalletImageMat: {
        width: "50%",
        height: "50%",
    },
    walletsDisplayWalletInfo: {
        width: "80%",
        height: "100%",
        flexDirection: "column",
        justifyContent: "center"
    },
    walletsDisplayWalletInfoTitle: {
        fontSize: 12,
        color: "rgba(255, 255, 255, .6)",
        marginBottom: variables.wallets.display.walletContentMargin
    },
    walletsDisplayWalletInfoStatus: {
        fontSize: 17,
        color: "rgba(255, 255, 255, 1)",
        marginTop: variables.wallets.display.walletContentMargin
    }
});