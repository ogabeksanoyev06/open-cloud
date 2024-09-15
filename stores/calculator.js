import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { useAxios } from '@/api/index';
import { useCustomToast } from '~/composables/useCustomToast.js';

export const useCalculatorStore = defineStore(
	'calculator',
	() => {
		const { showToast } = useCustomToast();
		const tarifData = ref([]);

		const tab1Configurations = ref([
			{
				id: 1,
				vcpu: 0,
				ram: 0,
				ssdNodes: 0,
				hddNodes: 0,
				publicIP: false,
				tarifData: tarifData.value,
				price: {
					vcpu_price: 1,
					ram_price: 1,
					ssd_price: 1,
					hdd_price: 1,
					public_ip_price: 1
				}
			}
		]);

		const tab2Configurations = ref([
			{
				id: 1,
				vcpu: 0,
				ram: 0,
				ssdNodes: 0,
				hddNodes: 0,
				publicIP: false,
				price: {
					vcpu_price: 1,
					ram_price: 1,
					ssd_price: 1,
					hdd_price: 1,
					public_ip_price: 1
				}
			}
		]);

		const specification_prices = ref({});

		const getTarifCategories = async () => {
			try {
				let res = await useAxios().getRequest('/calculator/configuration_tarif_categories');
				tarifData.value = res.data;
				return res.data;
			} catch (error) {
				console.log(error);
			}
		};

		const getSpecificationPrice = async () => {
			try {
				let res = await useAxios().getRequest('/calculator/specification_prices');
				specification_prices.value = res.data;
				updateConfigurationPrices(1, tab1Configurations.value);
				updateConfigurationPrices(2, tab2Configurations.value);
				return res.data;
			} catch (error) {
				console.log(error);
			}
		};

		const updateConfigurationPrices = (id, configurations) => {
			const prices = specification_prices.value;
			const tariff = tarifData.value.results;
			if (id === 1) {
				configurations.forEach((config) => {
					config.price = {
						vcpu_price: prices.vcpu_price || 0,
						ram_price: prices.ram_price || 0,
						ssd_price: prices.ssd_price || 0,
						hdd_price: prices.hdd_price || 0,
						public_ip_price: prices.public_ip_price || 0
					};
					config.tarifData = tariff;
				});
			} else {
				configurations.forEach((config) => {
					config.price = {
						vcpu_price: prices.vcpu_price || 0,
						ram_price: prices.ram_price || 0,
						ssd_price: prices.ssd_price || 0,
						hdd_price: prices.hdd_price || 0,
						public_ip_price: prices.public_ip_price || 0
					};
				});
			}
		};

		const addConfiguration = async (tab) => {
			const configurations = tab === 1 ? tab1Configurations.value : tab2Configurations.value;
			const lastConfig = configurations[configurations.length - 1];
			const newId = lastConfig ? lastConfig.id + 1 : 1;
			const price = specification_prices.value;
			const tariff = tarifData.value.results;

			const updatedTariff = tariff.map((tarif) => ({
				...tarif,
				tarifs: tarif.tarifs.map((tarifDetail) => ({
					...tarifDetail,
					active: false
				}))
			}));

			if (tab === 1) {
				configurations.push({
					id: newId,
					vcpu: 0,
					ram: 0,
					ssdNodes: 0,
					hddNodes: 0,
					publicIP: false,
					tarifData: updatedTariff,
					price: {
						vcpu_price: price.vcpu_price || 0,
						ram_price: price.ram_price || 0,
						ssd_price: price.ssd_price || 0,
						hdd_price: price.hdd_price || 0,
						public_ip_price: price.public_ip_price || 0
					}
				});
			} else {
				configurations.push({
					id: newId,
					vcpu: 0,
					ram: 0,
					ssdNodes: 0,
					hddNodes: 0,
					publicIP: false,
					price: {
						vcpu_price: price.vcpu_price || 0,
						ram_price: price.ram_price || 0,
						ssd_price: price.ssd_price || 0,
						hdd_price: price.hdd_price || 0,
						public_ip_price: price.public_ip_price || 0
					}
				});
			}

			showToast("Konfiguratsiya qo'shildi", 'success');
		};

		const incrementNodes = (tab, id, type) => {
			const configurations = tab === 1 ? tab1Configurations.value : tab2Configurations.value;
			const config = configurations.find((conf) => conf.id === id);
			if (config) {
				if (type === 'vcpu') {
					config.vcpu += 10;
				} else if (type === 'ram') {
					config.ram += 10; // RAMni 16GB oshirish
				} else if (type === 'ssd') {
					config.ssdNodes += 10; // SSDni 16GB oshirish
				} else if (type === 'hdd') {
					config.hddNodes += 10; // HDDni 16GB oshirish
				}
			}
		};

		const decrementNodes = (tab, id, type) => {
			const configurations = tab === 1 ? tab1Configurations.value : tab2Configurations.value;
			const config = configurations.find((conf) => conf.id === id);
			if (config) {
				if (type === 'vcpu' && config.vcpu >= 10) {
					config.vcpu -= 10;
				} else if (type === 'ram' && config.ram >= 10) {
					// RAM 16GBdan kam bo'lmasligi kerak
					config.ram -= 10;
				} else if (type === 'ssd' && config.ssdNodes >= 10) {
					// SSD 16GBdan kam bo'lmasligi kerak
					config.ssdNodes -= 10;
				} else if (type === 'hdd' && config.hddNodes >= 10) {
					// HDD 16GBdan kam bo'lmasligi kerak
					config.hddNodes -= 10;
				}
			}
		};

		const deleteConfiguration = (tab, id) => {
			const configurations = tab === 1 ? tab1Configurations.value : tab2Configurations.value;
			const index = configurations.findIndex((conf) => conf.id === id);
			if (index !== -1) {
				// Konfiguratsiyani o'chirib tashlash
				configurations.splice(index, 1);
				showToast("Konfiguratsiya o'chirildi", 'error');

				// TarifData ma'lumotlarini tozalash
				if (tarifData.value.results) {
					tarifData.value.results.forEach((tarif) => {
						tarif.tarifs.forEach((tarifItem) => {
							tarifItem.active = false; // Active ni false ga o'zgartirish
						});
					});
				}
			}
		};

		const deleteAllConfigurations = (tab) => {
			const configurations = tab === 1 ? tab1Configurations.value : tab2Configurations.value;
			configurations.length = 0;
		};

		const togglePublicIP = (tab, id) => {
			const configurations = tab === 1 ? tab1Configurations.value : tab2Configurations.value;
			const config = configurations.find((conf) => conf.id === id);
			if (config) {
				config.publicIP = !config.publicIP;
			}
		};

		const changeTarif = (selectedIndex, tarifId) => {
			const configurations = tab1Configurations.value;
			configurations.forEach((config) => {
				if (config.id === selectedIndex) {
					config.tarifData.forEach((tarifDataItem) => {
						tarifDataItem.tarifs.forEach((tarif) => {
							tarif.active = tarif.id === tarifId;
						});
					});
				}
			});
		};

		const calculateTotalPriceTab1 = computed(() => {
			const prices = specification_prices.value;

			return tab1Configurations.value.reduce((total, config) => {
				const basePrice = config.vcpu * (prices.vcpu_price || 0) + config.ram * (prices.ram_price || 0) + config.ssdNodes * (prices.ssd_price || 0) + config.hddNodes * (prices.hdd_price || 0) + (config.publicIP ? prices.public_ip_price || 0 : 0);

				const tariffPrice = config.tarifData.reduce((tariffTotal, tarif) => {
					const activeTarifPrice = tarif.tarifs.reduce((tariffSum, tarifDetail) => {
						return tarifDetail.active ? tariffSum + tarifDetail.price : tariffSum;
					}, 0);
					return tariffTotal + activeTarifPrice;
				}, 0);

				return total + basePrice + tariffPrice;
			}, 0);
		});

		const calculateTotalPriceTab2 = computed(() => {
			const prices = specification_prices.value;
			return tab2Configurations.value.reduce((total, config) => {
				const configPrice = config.vcpu * (prices.vcpu_price || 0) + config.ram * (prices.ram_price || 0) + config.ssdNodes * (prices.ssd_price || 0) + config.hddNodes * (prices.hdd_price || 0) + (config.publicIP ? prices.public_ip_price || 0 : 0);
				return total + configPrice;
			}, 0);
		});

		return {
			tarifData,
			getTarifCategories,
			getSpecificationPrice,
			tab1Configurations,
			tab2Configurations,
			addConfiguration,
			incrementNodes,
			decrementNodes,
			deleteConfiguration,
			togglePublicIP,
			specification_prices,
			changeTarif,
			deleteAllConfigurations,
			calculateTotalPriceTab2,
			calculateTotalPriceTab1
		};
	},
	{
		persist: {
			storage: persistedState.localStorage
		}
	}
);
